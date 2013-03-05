Ext.onReady(function(){	
	var childPnl1 = {
		frame : true,
		height : 50,
		html : 'My firsat child panel',
		title : 'First children are fun'
	};

	var childPnl2 = {
		width : 300,
		html : 'Second child panel',
		title : 'Second children have all fun'
	};


	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		title : 'A window with container layout',
		autoScroll : true,
		items : [childPnl1, childPnl2],
		tbar : [{
			text : 'Add child',
			handler : function(){
				var numItems = myWin.items.getCount() + 1;
				myWin.add({
					title : 'Child number ' + numItems,
					height : 60,
					frame : true,
					collapsible : true,
					collapsed : true,
					html : 'Yay, another child'
				});
				myWin.doLayout();
			}
		}]
	});
	myWin.show();
});