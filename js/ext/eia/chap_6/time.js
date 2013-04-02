Ext.QuickTips.init();		// tooltips

var fpItems = [
	{
		xtype : 'timefield',
		fieldLabel : 'Please select time',
		anchor : '100%',
		minValue : '09:00',
		maxValue : '18:00',
		increment : 30,
		format : 'H:i'
	}
];

var fp = new Ext.form.FormPanel({
	renderTo : Ext.getBody(),
	width : 400,
	height : 150,
	title : 'Excersing time field',
	frame : true,
	bodyStyle : 'padding : 6px',
	labelWidth : 126,
	defaultType : 'textfield',
	defaults : {
		msgTarget : 'side',		// error message to right side of field
		anchor : '-20'
	},
	items : fpItems		// refer fpItems
});