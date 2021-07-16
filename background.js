chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var data = request.message;
  console.log("🎃 : " + data);
  sendResponse({ words: data });
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { addedWords: data });
});
