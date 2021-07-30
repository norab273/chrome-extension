let newWords = [];
const inputWord = document.getElementById("input-word");
const inputBtn = document.getElementById("add-btn");
const wordList = document.getElementById("word-list");
const deleteBtn = document.getElementById("delete-btn");
const maskButton = document.getElementById("mask-button");
let wordsFromLocalStorage = JSON.parse(localStorage.getItem("newWords"));

maskButton.addEventListener("click", function () {
  alert("Coming soon! Vous pourrez bientôt rajouter des mots à masquer");
});

// // get the stored data and display it
// chrome.storage.sync.get({ tasks: "" }, (result) => {
//   document.getElementById("list_task").innerHTML = result.tasks;
// });

// // submitting it
// form = document.forms.myform;
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   list_item = document.getElementById("list_task");
//   var list = document.createElement("li");
//   var listcontent = document.createTextNode(form.task.value);
//   let newWord = form.task.value;
//   list.appendChild(listcontent);
//   list_item.appendChild(list);
//   chrome.storage.sync.set({ tasks: newWord }, () => {
//     console.log(tasks);
//   });
//   form.task.value = "";

//   // save the task
//   tasks = document.getElementById("list_task").innerHTML;
// });

// // marking it as complete
// const ul = document.getElementById("list_task");
// ul.addEventListener("click", function (e) {
//   e.target.classList.toggle("checked");

//   //save it
//   tasks = document.getElementById("list_task").innerHTML;
//   chrome.storage.sync.set({ tasks: tasks }, () => {
//     console.log(tasks);
//   });
// });

// document.getElementById("reset").addEventListener("click", () => {
//   chrome.storage.sync.set({ tasks: "" }, () => {
//     console.log("Data Reset");
//   });
// });

// chrome.storage.sync.get(null, function (items) {
//   console.log(items);
// });

// chrome.storage.sync.set({
//   key: ["create an extension", "drink a glass of water"],
// });
