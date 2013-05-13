Ext.define("MyApp.library.bookshelf.Bookshelf",{
	/*
	// classes that needs to be imported, uses is post processor, requires is pre processor
	// requires MixedCollection, as its instance is created in constructor
	*/
	requires : ["Ext.util.MixedCollection"],
	uses : ["MyApp.models.Book"],
	
	constructor : function(){
		this.books = Ext.create("Ext.util.MixedCollection");		// using requires, as constructor needs class
	},
	
	getBook : function(index){
		return this.books.get(index);
	},
	
	addBook : function(data){			// using uses, may or may not be used
		var book = Ext.create("MyApp.models.Book", data);
		this.books.add(book);
	}
});