init();


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url && tab.url.indexOf('http://127.0.0.1:8080/') === 0) {
        chrome.pageAction.show(tabId);

    }
});



chrome.extension.onMessage.addListener(function(request,sender){
    console.log(sender);
    console.log(request);
    returnMessageToContentScript(request.message);

});


function returnMessageToContentScript(reply) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {changeEvent : reply}, function(response) {});
  });
}


function addContextMenu() {
  var showForPages = ["http://127.0.0.1:8080/*"];
  var reload = chrome.contextMenus.create({
    "title": "Reload Changes",
    "contexts": ["page"],
    "onclick" : reloadPage,
    "documentUrlPatterns":showForPages
  });

  var createLessFile = chrome.contextMenus.create({
    "title": "Create Less File",
    "contexts": ["page"],
    "onclick" : generateLessFile,
    "documentUrlPatterns":showForPages
  });
}

function reloadPage() {
    chrome.tabs.getSelected(null, function(tab) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(tab.id, {code: code});
    });
}

function generateLessFile(event) {
  returnMessageToContentScript(sessionStorage.getItem('bbc_data'));
  console.warn("#TODO");
}

function addSessionStorage() {
  var bbc_object = {
        "version" : "0.1",
        "bbc_colors": {
          "@someColor": "black",
          "@testColor": "#121212"
        },
        "bbc_logo_url": "http://aaaaa",
        "bbc_background_url": "http://bbbbbb"
  };

  sessionStorage.setItem("bbc_data", JSON.stringify(bbc_object));

}


function init() {
    addContextMenu();
    addSessionStorage();
}
