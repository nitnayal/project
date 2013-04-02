Ext.onReady(function(){



});



/* 
 //** event bubble
	Ext.get('myDiv').on('click', function(eventObj, elRef){
		console.log('myDivClick handler source element ID: ' + elRef.id);
	});
	
//** event bubble stop
	Ext.get('myHref').on('click', function(eventObj, elRef){
		eventObj.stopEvent();
		console.log('myDivClick handler source element ID: ' + elRef.id);
	});


//** >>>>>> context menu >>>>>>
	Ext.get('myDiv').on('contextmenu', function(eventObj, elRef){
		console.log('myDiv contextmenu Handler, source el ID: ' + elRef.id);
	});
	
	Ext.get('myHref').on('contextmenu', function(eventObj, elRef){
		eventObj.stopEvent();
		console.log('myHref contextmenu Handler, source element ID: ' + elRef.id);
		
		if(!this.ctxMenu){
			this.ctxMenu = new Ext.menu.Menu({
				items : [
					{ text : "this is"},
					{ text : "our custom"},
					{ text : "context menu"}
				]
			});
		}
		this.ctxMenu.show(elRef);
	});
*/	