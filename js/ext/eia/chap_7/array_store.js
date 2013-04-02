var arrayData = [
    ['Jay Garcia', 'MD'],
    ['Aaron Baker', 'VA'], 
    ['Susan Smith', 'DC'], 
    ['Mary Stein', 'DE'], 
    ['Bryan Shanley', 'NJ'], 
    ['Nyri Selgado', 'CA']
];

var memoryProxy = new Ext.data.MemoryProxy(arrayData);      // new Memory Proxy

var nameRecord = Ext.data.Record.create([       // Ext.data.Record constructor , no need of new as Record creates a constructor thru create
    { name : 'personName', mapping : 1 },
    { name : 'state', mapping : 2 }
]);

var arrayReader = new Ext.data.ArrayReader({}, nameRecord);     // instantiate an array reader

var store = new Ext.data.Store({        // build store
    reader : arrayReader,
    proxy : memoryProxy
});

// creating a column model
var colModel = new Ext.grid.ColumnModel([
	{
		header : 'Full Naame',
		sortable : true,
		dataIndex : 'personName'		// map data indexes to columns
	},
	{
		header : 'State',
		dataIndex : 'state'
	}
]);

var gridView = new Ext.grid.GridView();
var selModel = new Ext.grid.RowSelectionModel({ singleSelect : true });		// create single-selection RowSelectionModel, by default multiple

Ext.onReady(function(){	
	var grid = new Ext.grid.GridPanel({
		title : 'Our first grid',
		renderTo : Ext.getBody(),
		autoHeight : true,
		width : 250,
		store : store,		// reference supporting classes, never pass layout to GridPanel as it will be ignored.
		view : gridView,
		colModel : colModel,
		selModel : selModel
	});
});
