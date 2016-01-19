chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.changeEvent) {
      dispatchChangeEvent(request.changeEvent);
    }
  }
);

function dispatchChangeEvent(data) {
  location.href = "javascript:updatePage('" + data + "'); void 0";
}
