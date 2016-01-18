init();

function init() {
	console.log(' %c BRANDAD | SYSTEMS ', 'background: #004078; color: white');
	removeAllCSSLinkElements();
	//addLessFile("Framework/theme.less");
	//addLessFile("Framework/organism/base.less");
	//addLessFile("css/theme.less");
	addLessFile("main.less");
	addLessCompiler(true);
	addPageEventHandler();
	showInfoMessage("BBC is ready!");
	console.log("");
}
