Ext.QuickTips.init();		// tooltips

var htmlEditor = {
	xtype : 'htmleditor',
	fieldLabel : 'Enter in any text',
	anchor : '100% 100%',
	allowBlank : false,
	validateValue : function(){
		var val = this.getRawValue();
		return (this.allowBlank || (val.length > 0 && val != '<br>') ? true : false);
	}
};

Ext.onReady(function() {
	
	var f = {
		xtype      : 'form',
		labelWidth : 100,
		items      : htmlEditor,
		border     : false
	}

	new Ext.Window({
		title : 'htmleditor',
		layout : 'form',
		height : 300,
		width : 700,
		bodyStyle : 'padding : 5px',
		items : f,
		buttons    : [
			{
				text : "Is the html editor valid??",
				handler : function() {
					var isValid = Ext.getCmp('ext-comp-1003').form.isValid();
					var msg = (isValid) ? 'valid' : 'invalid';
					Ext.MessageBox.alert('', 'The HTML Editor is ' + msg);
				}
			}
		
		]
	}).show();
});