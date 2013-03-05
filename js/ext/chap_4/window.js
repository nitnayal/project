//******moveable window
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


/*
//non movable rigid modal window
Ext.onReady(function(){		// execute code after body is loaded
	var win = new Ext.Window({
		height : 75,
		width : 200,
		modal : true,		// semi transparent background
		title : 'This is one rigid window'	,
		html : 'Try to move or resize. I dare you',
		plain : true,
		border : false,
		resizable : false,
		draggable : false,
		closable : false,
		buttonAlign : 'center',
		buttons : [{
			text : 'I give up!',
			handler : function(){win.close();}
		}]
	});
	win.show();
});
 
*/