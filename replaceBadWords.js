let ELEMENT = 1;
let DOCUMENT = 9;
let DOCUMENT_FRAGMENT = 11;
let TEXT = 3;
let textNodeValue;

let BadWords = [];
let REPLACE = ["🌸"];

const jsonFilePath = chrome.runtime.getURL("badWords.json");

async function updateBadWords() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(["customWords"], function (result) {
      let customWords = result.customWords || [];
      BadWords = Array.from(new Set([...BadWords, ...customWords]));
      resolve();
    });
  });
}

chrome.storage.onChanged.addListener(async function (changes, namespace) {
  for (let key in changes) {
    if (key === "customWords") {
      await updateBadWords();
      walk(document.body);
    }
  }
});

async function initTextReplacement() {
  let response = await fetch(jsonFilePath);
  let data = await response.json();
  BadWords = data.badWords;
  await updateBadWords();
  walk(document.body);

  // Setting up a mutation observer to monitor the DOM changes
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          walk(mutation.addedNodes[i]);
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function walk(node) {
  if (node.nodeType === 3) {
    replaceText(node);
  } else {
    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      walk(children[i]);
    }
  }
}

function replaceText(textNode) {
  if (!isReplacingWords) return;
  let textNodeValue = textNode.nodeValue;
  for (let i = 0; i < BadWords.length; i++) {
    textNodeValue = textNodeValue.replace(
      new RegExp(`\\b${BadWords[i]}\\b`, "gi"),
      REPLACE[0]
    );
  }
  textNode.nodeValue = textNodeValue;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleReplace");
  const statusText = document.getElementById("statusText");

  const updateStatusText = (isEnabled) => {
    // Nouvelle fonction ajoutée
    statusText.textContent = isEnabled ? "On" : "Off";
  };
  // Charger l'état actuel du stockage
  chrome.storage.local.get(["isReplacingWords"], (result) => {
    toggleButton.checked = result.isReplacingWords;
    updateStatusText(isEnabled);
  });

  // Ajouter un écouteur d'événements au bouton
  toggleButton.addEventListener("change", () => {
    const isEnabled = toggleButton.checked;
    updateStatusText(isEnabled);
    chrome.storage.local.set({ isReplacingWords: isEnabled }, () => {
      // Envoyer un message à la page de contenu pour changer l'état du remplacement des mots
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleReplace" });
      });
    });
  });
});

let isReplacingWords;

chrome.storage.local.get(["isReplacingWords"], (result) => {
  isReplacingWords = result.isReplacingWords;
  if (isReplacingWords) {
    initTextReplacement(); // Démarrez le remplacement des mots si activé
  }
});
