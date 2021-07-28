chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let data = request.message;
  console.log("🎃 words received in background: " + data);
  sendResponse({ words: data });
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      chrome.tabs.query({ active: true }, function (tabs) {
        const msg = "Hello from background 🔥";
        console.log(msg);
        chrome.tabs.sendMessage(tabs[0].id, { "message": data });
      });
    }
  });
});
