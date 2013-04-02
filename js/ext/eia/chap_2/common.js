Ext.onReady(function(){

});
/* 
 
//** hello world
	var myDiv1 = Ext.get('div1');	// returns Ext.Element reference
	myDiv1.setSize(350,350, {duration :3, easing : 'bounceOut'});

//** template 1
	var myTpl = new Ext.Template("<div>Hello {0}.</div>");
	myTpl.append(document.body, ['Marjan']);	// pass a target in array format
	myTpl.append(document.body, ['Ricky']);
	myTpl.append(document.body, ['Balboa']);

	
//** template 2
	var myTpl = new Ext.Template(		// 4 slots
		'<div style="background-color: {color}; margin: 10px;">',
			'<b> Name : </b> {name}<br />',
			'<b> Age : </b> {age}<br />',
			'<b> DOB : </b> {dob}<br />',
		'</div>'
	);
	
	myTpl.compile();	// compile template for fater speed
	myTpl.append(document.body, {
		color : "#E9E9FF",
		name : 'John',
		age : '9',
		dob : '20-07-1980' 
	});
	myTpl.append(document.body, {
		color : "#F9A9FF",
		name : 'Mike',
		age : '19',
		dob : '22-07-1995' 
	});


//** X-template	
	var tplData = [{
		color : "#FFE9E9",
		name : 'Naomi White',
		age : 25,
		dob : '03/17/84',
		cars : ['Jetta','Camry','S2000']
	},{
		color : "#E9E9FF",
		name : 'Jack Effron',
		age : 20,
		dob : '09/12/84',
		cars : ['Civic','Camry','ZT780']		
	}];
	
	var myTpl = new Ext.XTemplate(
		'<tpl for=".">',		// for and if; '.' allows looping thru array passed - tplData
			'<div style="background-color: {color}; margin: 10px;">',
				'<b> Name : </b> {name}<br />',
				'<b> Age : </b> {age}<br />',
				'<b> DOB : </b> {dob}<br />',
			'</div>',
		'</tpl>'
	);
	myTpl.compile();
	myTpl.append(document.body, tplData);	


//** >>>>>> X-template	 advanced >>>>>>
	var tplData = [{
		color : "#FFE9E9",
		name : 'Naomi White',
		age : 25,
		dob : '03/17/84',
		cars : ['Jetta','Camry','S2000']
	},{
		color : "#E9E9FF",
		name : 'Jack Effron',
		age : 20,
		dob : '09/12/84',
		cars : ['Civic','tomy','ZT780']		
	}];
	
	var myTpl = new Ext.XTemplate(
		'<tpl for=".">',
			'<div style="background-color: {color}; margin: 10px;">',
				'<b> Name : </b> {name}<br />',
				'<b> Age : </b> {age}<br />',
				'<b> DOB : </b> {dob}<br />',
				'<b> Cars : </b>',
				'<tpl for="cars">',		// inside current block, loop thru cars
					'{.}',		// display current car name here
					'<tpl if="this.isCamry(values)">',
						'<b>(same car)</b>',	// if block - tpl
					'</tpl>',
					'{[ (xindex < xcount) ? ", ":"" ]}',		// current index less than current count
				'</tpl>',
				'<br />',
			'</div>',
		'</tpl>',
		{
			isCamry : function(car){return car == 'Camry';}
		}
	);
	myTpl.compile();
	myTpl.append(document.body, tplData);
*/	