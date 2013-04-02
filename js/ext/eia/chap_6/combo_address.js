Ext.QuickTips.init();

var tpl = new Ext.XTemplate(
'<tpl for=".">',
	'<div class="combo-result-item">',
		'<div class="combo-name">{name}</div>',
		'<div class="combo-full-address">{street}</div>',
		'<div class="combo-full-address">{city} {state} - {zip}</div>',
	'</div>',
'</tpl>'
);



Ext.onReady(function(){
	var remoteJsonStore = new Ext.data.JsonStore({			// preconfigured extension of Ext.data.Store that returns array data 
		root : 'records',
		baseParams : {column : 'fullName'},		// ensures baseParams are sent with every request, query column - fullname at remote file
		fields : [
			{ name : 'name', mapping : 'fullName'},		// map fullname of remote to name of loacal
			{ name : 'city', mapping : 'city'},	
			{ name : 'state', mapping : 'state'},	
			{ name : 'zip', mapping : 'zip'},
			{ name : 'id', mapping : 'id'}
		],
		proxy : new Ext.data.ScriptTagProxy(
			{url : 'http://extjsinaction.com/dataQuery.php'}
		),
		totalProperty : 'totalCount'
	});
	
	var combo = {
		xtype : 'combo',
		fieldLabel : 'Search by name',
		forceSelection : true,		// remote filtering
		displayField : 'name',		// shows name data point in TextField
		valueField : 'id',			// id is used to send data on remote request
		hiddenName : 'customerId',	// as id is sent but name is displayed, so ahidden Input field is created to store field data
		loadingText : 'Querying...',
		minChars : 1,		// no. of chars for auto complete
		triggerAction : 'name',		// instruct combo to perform a data store load query for all data
		store : remoteJsonStore,
		pageSize : 20,			// display 20 pages at a time
		tpl: tpl,
		itemSelector : 'div.combo-result-item'
	};
	
	new Ext.Window({
		title : '',
		height : 100,
		layout : 'form',
		labelWidth : 80,
		bodyStyle : 'padding : 5px',
		items : combo
	}).show();	
});
