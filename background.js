let wordArray = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let data = request.message;
  wordArray.push(data);
  console.log("🎃 : " + data);
  sendResponse({ words: data });
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, { addedWords: data });
  //   });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    chrome.tabs.query({ active: true }, function (tabs) {
      const msg = "Hello from background 🔥";
      console.log(msg);
      chrome.tabs.sendMessage(tabs[0].id, { "message": wordArray });
    });
  }
});
