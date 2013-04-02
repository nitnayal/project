Ext.onReady(function(){	
	var myWin = new Ext.Window({
		height : 300,
		width : 300,
		border : false,
		title : 'A window with Accordion layout',
		layout : 'accordion',
		layoutConfig : {animate : true},		// animate collapse and expansion of layout
		items : [
			{
				xtype : 'form',
				title : 'General info',
				bodyStyle : 'padding: 5px',
				defaultType : 'field',
				labelWidth : 50,
				items : [
					{fieldLabel : 'Name', anchor : '-10'},
					{xtype : 'numberfield', fieldLabel : 'Age', width : 30},
					{xtype : 'combo', fieldLabel : 'Location', anchor : '-10', store : ['Here', 'There', 'Anywhere']}
				]
			},
			{
				xtype : 'panel',
				title : 'Bio',
				layout : 'fit',
				items : {xtype : 'textarea', value : 'Tell us about yourself'}
			},
			{
				title : 'Instructions',
				html : 'Please enter information',
				tools : [{id : 'gear'},{id : 'help'}]		// gear and help icon
			}
		]
	});
	myWin.show();
});