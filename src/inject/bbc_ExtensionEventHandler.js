// console.log("whoop whoop");
// showErrorMessage("awwwwwwwwwwwww");
//
//
// sendMessage();
//
//
// function sendMessage() {
//   chrome.runtime.sendMessage(
//       "foo",
//       function (response) {
//           if(response === 'undefined'){
//               console.log(response);
//               sendMessage();
//           }
//       }
//   );
//   console.log("mohmoh");
// }
// var bbc_tag = document.getElementsByTagName("bbc")[0];
//
//
//
// var bbc_ext_event = new Event('bbc_ext_event');
//
//
// // Dispatch the event.
// bbc_tag.dispatchEvent(bbc_ext_event);

function magicalTree(hexColor) {
    location.href="javascript:greeting('"+hexColor+"'); void 0";
    //do magic here!
}

function dispatchChangeEvent(data) {
  location.href="javascript:updatePage('"+data+"'); void 0";
}

chrome.runtime.onMessage.addListener(
  function (request,sender) {
      console.log(request);
      console.log(sender);
      if(request.pewpew == 'poi poi'){
        var hexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        magicalTree(hexColor);
      }

      if(request.changeEvent){
        dispatchChangeEvent(request.changeEvent);
      }
  }
);

var evt = document.createEvent('Event');
evt.initEvent('myCustomEvent', true, false);
document.dispatchEvent(evt);
