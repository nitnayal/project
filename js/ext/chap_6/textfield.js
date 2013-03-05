Ext.QuickTips.init();		// tooltips

var myValidFn = function(v){
	var myRegex = /https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?/;
	return myRegex.test(v);
}

Ext.apply(Ext.form.VTypes, {
	urlOnly : myValidFn,
	urlOnlyText : 'Must be a valid web URL'		// custom error message
});

var fpItems = [
	{
		fieldLabel : 'Alpha only',
		allowBlank : false,		// blank validation
		emptyText : 'This field is empty',
		maskRe : /[a-z]/i		//only alpha
	},
	{
		fieldLabel : 'simple 3 to 7 chars',
		allowBlank : false,
		minLength : 3,
		maxLength : 7
	},
	{
		fieldLabel : 'Special chars only',
		stripCharsRe : /[a-zA-Z0-9]/ig		//only special chars
	},
	{
		fieldLabel : 'Web Only with VType',
		vtype : 'urlOnly'		// custom validation method {optional : regex and invalid text string}
	},
	{
		fieldLabel : 'Password',
		allowBlank : false,
		inputType : 'password'
	},
	{
		fieldLabel : 'File',
		allowBlank : false,
		inputType : 'file'
	},
	{
		xtype : 'numberfield',
		fieldLabel : 'Numbers only',
		allowBlank : false,
		emptyText : 'This field is empty',
		decimalPrecision : 3,
		minValue : 0.001,
		maxValue : 2
	}
];

var fp = new Ext.form.FormPanel({
	renderTo : Ext.getBody(),
	width : 400,
	height : 300,
	title : 'Excersing textfields',
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

/*
	Each field can have its own msgTarget property.
	* 1. qtip - error on hover
	* 2. under - error below field
	* 3. side - exclamation mark on right
*/