function removeAllCSSLinkElements() {
	Array.prototype.forEach.call(document.querySelectorAll('style,[rel="stylesheet"]'),
	function(element){
		  try{
		    	element.parentNode.removeChild(element);
					showSuccessMessage("Remove CSS completed!");
		  }catch(error){
					showErrorMessage("Could not remove CSS! "+error);
			}
	});
}

function addLessFile(lessfile){
	try {
		var lessFile = document.createElement('link');
		lessFile.href=chrome.extension.getURL("src/stylesheets/less/"+lessfile);
		lessFile.type='text/css';
		lessFile.rel='stylesheet/less';
		document.getElementsByTagName('head')[0].appendChild(lessFile);
		showSuccessMessage("injected " + lessfile);
	} catch (error) {
		showErrorMessage("Could not injected "+lessfile+" "+error);
	}
}

function addLessCompiler(devMode) {
	try {
		if(devMode){
			lessDev=document.createElement('script');
			lessDev.id='less-dev';
			document.getElementsByTagName('head')[0].appendChild(lessDev);
			var lessDevTag = document.getElementById('less-dev');
			var lessDevContent = document.createTextNode("less = { env: \'development\'};");
			lessDevTag.appendChild(lessDevContent);
		}
		lessScript = document.createElement('script');
		lessScript.src=chrome.extension.getURL("js/less/less.js");
		lessScript.type="text/javascript";
		document.getElementsByTagName('head')[0].appendChild(lessScript);
		showSuccessMessage("injected less.js");
	} catch (error) {
		showErrorMessage("Could not injected less.js! "+error);
	}
}

function addPageEventHandler() {
	try {
		localStorageHandler = document.createElement('script');
		localStorageHandler.src=chrome.extension.getURL("js/bbc_PageEventHandler.js");
		localStorageHandler.type="text/javascript";
		document.getElementsByTagName('head')[0].appendChild(localStorageHandler);
		showSuccessMessage("injected bbc_PageEventHandler.js");
	} catch (error) {
		showErrorMessage("Could not injected bbc_PageEventHandler.js! "+error);
	}
}
