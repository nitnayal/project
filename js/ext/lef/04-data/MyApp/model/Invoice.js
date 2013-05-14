Ext.define('MyApp.model.Invoice',{
	extend : "Ext.data.Model",
	idProperty : 'idInvoice',	// will store ID of each record instance
	fields : [
		{name : 'IdInvoice'},
		{name : 'taxId'},
		// dateIssued accepts date field, thus value will be converted to type
		// other fields are string, int, float, boolean
		{name : 'dateIssued', type: 'date', dateFormat : 'Y-m-d h:i:s'},
		{name : 'name'},
		{name : 'address'}
	],
	// type defines the validation to be applied to field
	// common types: inclusion, exclusion, presence, length, format, and e-mail
	validations : [
		{type : 'presence', field:'taxId'},
		{type : 'length', field:'taxId', min:5, max: 7,message : ' should lie b/w 5 and 7'},
		{type : 'presence', field:'name'},
		{type : 'format', field:'name', matcher:/^[\w ]+$/}
	],
	hasMany : [
		// getItems is the function name that will be created in invoice class; if no name
		// defined Ext will pluuraize Item (MyApp.model.Item) to Items
		{model : 'MyApp.model.Item', name:'getItems'}
	]
	
});