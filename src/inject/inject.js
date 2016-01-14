chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log(' %c BRANDAD | SYSTEMS ', 'background: #004078; color: white');
    init();

	}
	}, 10);
});

function removeAllCSSLinkElements() {
	Array.prototype.forEach.call(document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]'),
	function(element){
		  try{
		    	element.parentNode.removeChild(element);
					showSuccessMessage("Remove CSS completed!");
		  }catch(error){
					showErrorMessage("Could not remove CSS! "+error);
			}
	});
}

function addLessFile(){
	try {
		var lessFile = document.createElement('link');
		lessFile.href=chrome.extension.getURL("src/stylesheets/less/main.less");
		lessFile.type='text/css';
		lessFile.rel='stylesheet/less';
		document.getElementsByTagName('head')[0].appendChild(lessFile);
		showSuccessMessage("Adding Less File completed!");
	} catch (error) {
		showErrorMessage("Could not add Less File! "+error);
	}
}

function addLessCompiler() {
	try {
		lessDev=document.createElement('script');
		lessDev.id='less-dev';
		document.getElementsByTagName('head')[0].appendChild(lessDev);
		var lessDevTag = document.getElementById('less-dev');
		var lessDevContent = document.createTextNode("less = { env: \'development\'};");
		lessDevTag.appendChild(lessDevContent);
		lessScript = document.createElement('script');
		lessScript.src=chrome.extension.getURL("js/less/less.js");
		lessScript.type="text/javascript";
		document.getElementsByTagName('head')[0].appendChild(lessScript);
		showSuccessMessage("Adding Less Compiler completed!");
	} catch (error) {
		showErrorMessage("Could not add Less Compiler! "+error);
	}
}

function init() {
	removeAllCSSLinkElements();
	addLessFile();
	addLessCompiler();
	showInfoMessage("BBC is ready!");
}

function showErrorMessage(errorMessage) {
	console.log('%c [BBC Error] '+errorMessage+' ', 'background: #FFEFEF; color: red');
}

function showSuccessMessage(successMessage) {
	console.log('%c [BBC Success] '+successMessage+' ', 'background: #ebffcc; color: #639a0d');
}

function showInfoMessage(infoMessage) {
	console.log('%c [BBC Information] '+infoMessage+' ', 'background: #ccf6ff; color: #0d819a');
}
