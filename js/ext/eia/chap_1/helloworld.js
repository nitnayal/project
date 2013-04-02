function buildWindow(){
	var win = new Ext.Window({
		id : 'mywindow',
		title : 'My extjs window',
		width : 300,
		height : 150,
		layout : 'fit',	// whatever child item is managed by window is stretched to the dimensions of Content Body.

		autoLoad : {
			url : 'sayHi.html',		// html content with just content and not head and body
			scripts: true		// execute a JavaScript if found
		}
	});
	win.show();
}
Ext.onReady(buildWindow);