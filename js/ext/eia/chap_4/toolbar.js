		var myBtnHandler = function(bt){
			Ext.MessageBox.alert('You clicked', bt.text);
		}
		
		var fileBtn = new Ext.Button({
			text : 'File',
			handler : myBtnHandler		// btn event
		});
		
		var editBtn = new Ext.Button({
			text : 'Edit',
			handler : myBtnHandler
		});
		
		var tbFill = new Ext.Toolbar.Fill();		// greedy toolbar fill
		var myTopToolbar = new Ext.Toolbar({
			items : [fileBtn, tbFill, editBtn]
		});
		
		var myBottomToolbar = [
			{
				text : 'Save',
				handler : myBtnHandler
			},
			'-',
			{
				text : 'Cancel',
				handler : myBtnHandler
			},
			'->',
			'<b>Items open: 1</b>'
		];
		
		// panel body
		var myPanel = new Ext.Panel({
			width : 200,
			height : 150,
			title : 'Ext rocks',
			collapsible : true,
			renderTo : Ext.getBody(),
			tbar : myTopToolbar,
			bbar : myBottomToolbar,
			html : 'My first toolbar panel',
			
			buttons : [
				{
					text : 'Press me',
					handler : myBtnHandler
				}
			],
			tools : [
				{
					id : 'gear',
					handler : function(evt, toolEl, panel){
						var toolClassNames = toolEl.dom.className.split(' ');
						var toolClass = toolClassNames[1];
						var toolId = toolClass.split('-')[2];
						Ext.MessageBox.alert('You clicked','Tool '+toolId);
					}
				},
				{
					id : 'help',
					handler : function(){
						Ext.MessageBox.alert('You clicked', 'The help tool');
					}
				}
			]
		});