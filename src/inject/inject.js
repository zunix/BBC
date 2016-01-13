chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
    console.log(init());
		console.log('%c BRANNDAD SYSTEMS ', 'background: #004078; color: white');

	}
	}, 10);
});



function removeAllCSSLinkElements() {
	console.log("remove CSS done");
}

function addLessFile(){
	return "add Less File done";
}

function addLessCompiler() {
	return "add Less Compiler done";
}

function init() {
	removeAllCSSLinkElements();
	addLessFile();
	addLessCompiler();
	return "init done";
}

function test(isChecked) {
	return isChecked ? "blabla true?" : "oder false?";
}
