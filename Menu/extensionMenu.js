const badWordsElement = document.getElementById("badWordsList");
const customWordsElement = document.getElementById("customWordsList");
const deleteBtn = document.getElementById("delete-btn");
const addBtn = document.getElementById("add-btn");
const inputWord = document.getElementById("input-word");

const jsonFilePath = chrome.runtime.getURL("badWords.json");

// Fonction pour mettre à jour la liste des mots interdits
function updateBadWords() {
  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      const badWordsArray = data.badWords;
      const badWordsString = badWordsArray.join(", ");
      badWordsElement.textContent = badWordsString;
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération du fichier JSON :", error);
    });
}

// Fonction pour mettre à jour la liste des mots personnalisés
function updateCustomWords() {
  chrome.storage.sync.get(["customWords"], function (result) {
    const customWordsArray = result.customWords || [];
    const customWordsList = document.getElementById("customWordsList");
    customWordsList.innerHTML = ""; // Vider la liste avant de la remplir

    customWordsArray.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.classList.add("delete-btn");
      deleteButton.onclick = function () {
        const index = customWordsArray.indexOf(word);
        if (index > -1) {
          customWordsArray.splice(index, 1);
          chrome.storage.sync.set(
            { customWords: customWordsArray },
            updateCustomWords
          );
        }
      };

      li.appendChild(deleteButton);
      customWordsList.appendChild(li);
    });
  });
}

// Événement pour supprimer tous les mots personnalisés
deleteBtn.addEventListener("click", function () {
  chrome.storage.sync.set({ customWords: [] }, function () {
    updateCustomWords(); // Mettez à jour la liste après suppression
  });
});

// Événement pour ajouter un nouveau mot
addBtn.addEventListener("click", function () {
  const newWord = inputWord.value.trim().toLowerCase();
  chrome.storage.sync.get(["customWords"], function (result) {
    let customWords = result.customWords || [];
    if (newWord && !customWords.includes(newWord)) {
      customWords.push(newWord);
      chrome.storage.sync.set({ customWords: customWords }, function () {
        inputWord.value = "";
        updateCustomWords(); // Mettez à jour la liste après ajout
      });
    }
  });
});

// Mettez à jour les listes au chargement de la page
updateBadWords();
updateCustomWords();
