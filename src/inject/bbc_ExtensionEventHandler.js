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

function magicalTree() {
    location.href="javascript:greeting(); void 0";
    //do magic here!
}


var evt = document.createEvent('Event');
evt.initEvent('myCustomEvent', true, false);
document.dispatchEvent(evt);
