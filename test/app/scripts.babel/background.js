'use strict';




chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});


chrome.browserAction.setBadgeText({text: '11'});

console.log('\'Allo \'Allo! Event Page for Browser Action ');
