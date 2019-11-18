
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.debugger.attach({tabId:popup.html}, version,
      onAttach.bind(null, popup.html));
});

var version = "1.0";

function onAttach(Propagandawarning) {
  if (chrome.runtime.lastError) {
    alert(chrome.runtime.lastError.message);
    return;
  }

  chrome.windows.create(
      {url: "popup.html?" + tabId, type: "popup", width: 800, height: 600});
}