let newWords = [];
const inputWord = document.getElementById("input-word");
const inputBtn = document.getElementById("add-btn");
const wordList = document.getElementById("word-list");
const deleteBtn = document.getElementById("delete-btn");
let wordsFromLocalStorage = JSON.parse(localStorage.getItem("newWords"));

// chrome.storage.sync.get(null, function (items) {
//   console.log(items);
// });

// get the stored data and display it
chrome.storage.sync.get({ tasks: "" }, (result) => {
  document.getElementById("list_task").innerHTML = result.tasks;
});

// submitting it
form = document.forms.myform;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  list_item = document.getElementById("list_task");
  var list = document.createElement("li");
  var listcontent = document.createTextNode(form.task.value);
  list.appendChild(listcontent);
  list_item.appendChild(list);
  form.task.value = "";

  // save the task
  tasks = document.getElementById("list_task").innerHTML;
  chrome.storage.sync.set({ tasks: tasks }, () => {
    console.log(tasks);
  });
});

// marking it as complete
const ul = document.getElementById("list_task");
ul.addEventListener("click", function (e) {
  e.target.classList.toggle("checked");

  //save it
  tasks = document.getElementById("list_task").innerHTML;
  chrome.storage.sync.set({ tasks: tasks }, () => {
    console.log(tasks);
  });
});

// initialize();

// function initialize() {
//   let localStorageContent = localStorage.getItem("newWords");
//   chrome.runtime.sendMessage({ message: localStorageContent });
// }

// if (wordsFromLocalStorage) {
//   newWords = wordsFromLocalStorage;
//   render(newWords);
// }

// function render(words) {
//   let listItems = "";
//   for (let i = 0; i < words.length; i++) {
//     listItems += `<li> ${words[i]} </li>`;
//   }
//   wordList.innerHTML = listItems;
// }

// deleteBtn.addEventListener("click", function () {
//   localStorage.clear();
//   newWords = [];
//   render(newWords);
// });

// inputBtn.addEventListener("click", function () {
//   newWords.push(inputWord.value);
//   inputWord.value = "";
//   localStorage.setItem("newWords", JSON.stringify(newWords));
//   render(newWords);
//   let localStorageContent = localStorage.getItem("newWords");
//   chrome.runtime.sendMessage({ message: localStorageContent });
// });
