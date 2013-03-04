var win;
var newWindow = function(btn){		// handler for Ext.button
	if(!win){
		win = new Ext.Window({
			animateTarget : btn.el,
			html : 'My first vanila window',
			closeAction : 'hide',		// prevent destruction on close
			id : 'myWin',
			height : 200,
			width : 300,
			constrain : true	// contain window to viewport
		});
	}
		win.show();
}

new Ext.Button({
	renderTo : Ext.getBody(),
	text : 'Open my Window',
	style : 'margin:100px',
	handler : newWindow
});