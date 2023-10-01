const inputWord = document.getElementById("input-word");
const deleteBtn = document.getElementById("delete-btn");
const maskButton = document.getElementById("mask-button");
const addBtn = document.getElementById("add-btn");
const outerWrapper = document.querySelector(".outer-wrapper");

// Charger les mots à partir de chrome.storage s'ils existent
chrome.storage.sync.get(["customWords"], function (result) {
  let customWords = result.customWords || [];
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
      });
    }
  });
});

// Événement pour supprimer tous les mots
deleteBtn.addEventListener("click", function () {
  chrome.storage.sync.set({ customWords: [] }, function () {});
});

document.addEventListener("DOMContentLoaded", function () {
  const outerWrapper = document.querySelector(".outer-wrapper");
  outerWrapper.classList.add("hidden");
  maskButton.addEventListener("click", function () {
    outerWrapper.classList.toggle("hidden");
  });
});
