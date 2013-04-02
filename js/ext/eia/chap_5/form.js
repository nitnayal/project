Ext.onReady(function(){	

/*
//** form layout
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		bodyStyle : 'padding: 5px',
		layout : 'form',	// use form layout
		labelWidth : 50,
		defaultType : 'textfield',	// default XType is field
		items : [
			{fieldLabel : 'Name', width : 110},
			{fieldLable : 'Age', width : 25},
			{
				xtype : 'combo',
				fieldLabel : 'Location',
				width : 120,
				store : ['Here', 'There', 'Anywhere']
			},
			{ xtype : 'textarea', fieldLabel : 'Bio'},
			{
				xtype : 'panel',
				fieldLabel : '',		// keep label but no text
				labelSeparator : '',
				frame : true,
				title : 'Instructions',
				html : 'Please fill the form',
				height : 55
			}
		]
	});
	myWin.show();
*/

//** using offsets with formlayout - form retains shape while resizing
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		bodyStyle : 'padding: 5px',
		layout : 'form',	// use form layout
		labelWidth : 50,
		defaultType : 'textfield',	// default XType is field
		items : [
			{fieldLabel : 'Name', anchor : '-4'},
			{fieldLable : 'Age', width : 25},
			{
				xtype : 'combo',
				fieldLabel : 'Location',
				anchor : '-4',
				store : ['Here', 'There', 'Anywhere']
			},
			{ xtype : 'textarea', fieldLabel : 'Bio', anchor : '-4, -134'},
			{
				xtype : 'panel',
				fieldLabel : '',		// keep label but no text
				labelSeparator : '',
				frame : true,
				title : 'Instructions',
				html : 'Please fill the form',
				anchor : '-4'
			}
		]
	});
	myWin.show();
});