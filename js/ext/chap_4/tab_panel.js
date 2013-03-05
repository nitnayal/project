var simpleTab = {		// simple static tab
	title : 'static tab',
	id : 'staticTab',
	html : 'bogaaloboo',
	closable : true
}

var closableTab = {		// closable tab
	title : 'I am closable',
	html : 'Please close when done rendering',
	closable : true
}

var disabledTab = {		// closable yet diabled tab
	title : 'Disabled tab',
	id : 'disabledTab',
	html : 'Peekaboo',
	disabled : true,
	closable : false
}

var tabPanel = new Ext.TabPanel({
	activeTab : 0,		// activate First tab after panel is rendered.
	id : 'myTPanel',
	enableTabScroll : true,
	items : [simpleTab, closableTab, disabledTab]
});

Ext.onReady(function(){	
	new Ext.Window({
		height : 300,
		width : 400,
		layout : 'fit',
		items : tabPanel
	}).show();
});

/*
In order to enable / disable tabs at runtime, use
	Ext.getCmp('disabledTab').enable();
	
To hide / unhide use
	Ext.getCmp('myTpanel').hideTabStripItem('disabledTab');
*/