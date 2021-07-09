let newWords = [];
const inputWord = document.getElementById("input-word");
const inputBtn = document.getElementById("add-btn");
const wordList = document.getElementById("word-list");
const deleteBtn = document.getElementById("delete-btn");
const wordsFromLocalStorage = JSON.parse(localStorage.getItem("newWords"));

if (wordsFromLocalStorage) {
  newWords = wordsFromLocalStorage;
  render(newWords);
}

function render(words) {
  let listItems = "";
  for (let i = 0; i < words.length; i++) {
    listItems += `<li> ${words[i]} </li>`;
  }
  wordList.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  newWords = [];
  render(newWords);
});

inputBtn.addEventListener("click", function () {
  newWords.push(inputWord.value);
  inputWord.value = "";
  localStorage.setItem("newWords", JSON.stringify(newWords));
  render(newWords);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Fetch the current tab
    chrome.tabs.sendMessage(tabs[0].id, { message: newWords });
  });
  console.log("🌸 newWords : " + newWords);
  console.log("message 🚁 : " + message);
  // sendToContentScript(newWords);
  // console.log("🌸 newWords : " + newWords);
  // console.log("send 🚁 : " + sendToContentScript(newWords));
});

// function sendMessageToContentScript(messageSent) {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     // Fetch the current tab
//     chrome.tabs.sendMessage(tabs[0].id, { message: messageSent });
//   });
// }
