let newWords = [];
const inputWord = document.getElementById("input-word");
const inputBtn = document.getElementById("add-btn");
const wordList = document.getElementById("word-list");
const deleteBtn = document.getElementById("delete-btn");
let wordsFromLocalStorage = JSON.parse(localStorage.getItem("newWords"));

const addTask = document.querySelector("#addTask");

//check if the list exists

chrome.storage.sync.get("tasks", function (result) {
  if (result.tasks) {
    result.tasks.map((task) => {
      console.log(task);
    });
  } else {
    chrome.storage.sync.set({ tasks: [] });
  }
});

addTasktoTheList = (task) => {
  const ul = document.querySelector("#tasksList");
  const li = document.createElement("li");

  li.innerHTML = task.task;
  task.complete ? li.classList.add("complete") : "";
  li.dataset.id = task.id;

  var span = document.createElement("span");
  span.setAttribute("id", "remove");
  span.innerHTML = "X";
  li.append(span);
  li.addEventListener("click", () => updateComplete(li), "false");
  span.addEventListener("click", () => removeItem(li));
  ul.append(li);
};

const removeItem = (e) => {
  e.parentNode.removeChild(e);

  const dataId = e.dataset.id;

  chrome.storage.sync.get({ tasks: [] }, function (items) {
    const updatedList = items.tasks.filter((item) => item.id != dataId);
    chrome.storage.sync.set({ tasks: updatedList });
  });
};

const updateComplete = (e) => {
  if (e.tagName === "LI") {
    e.classList.toggle("complete");
    const dataId = e.dataset.id;

    chrome.storage.sync.get("tasks", function (items) {
      const updatedList = items.tasks.map((item) => {
        if (item.id === dataId) {
          item["complete"] = !item["complete"];
        }
        return item;
      });

      chrome.storage.sync.set({ tasks: updatedList });
    });
  }
};

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  let task = document.querySelector("#tasks").value;

  if (!task.length) {
    alert("Please add a task to add");
  } else {
    const obj = {
      task: task,
      complete: false,
      id: Date.now(),
    };

    chrome.storage.sync.get("tasks", function (result) {
      if (result.tasks) {
        chrome.storage.sync.set({ tasks: [...result.tasks, obj] });
      }
    });

    document.querySelector("#tasks").value = "";
  }
});

chrome.storage.sync.get(null, function (items) {
  console.log(items);
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

chrome.storage.sync.remove("data");
