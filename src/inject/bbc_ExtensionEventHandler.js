console.log("whoop whoop");
showErrorMessage("awwwwwwwwwwwww");


sendMessage();


function sendMessage() {
  chrome.runtime.sendMessage(
      "foo",
      function (response) {
          if(response === 'undefined'){
              console.log(response);
              sendMessage();
          }
      }
  );
  console.log("mohmoh");
}
