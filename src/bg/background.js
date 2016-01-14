// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  },
  addContextMenu()
);

function reloadChangesHandler(event) {
    console.log(event);
    console.log("moin reload");
}

function generateLessFile(event) {
    console.log(event);
    console.log("moin less");
}

function addContextMenu() {
  var showForPages = ["http://127.0.0.1:8080/*"];
  var reload = chrome.contextMenus.create({
    "title": "Reload Changes",
    "contexts": ["page"],
    "onclick" : reloadChangesHandler,
    "documentUrlPatterns":showForPages
  });
  var Test = chrome.contextMenus.create({
    "title": "Test",
    "contexts": ["page"],
    "onclick" : generateLessFile,
    "documentUrlPatterns":showForPages
  });
}
