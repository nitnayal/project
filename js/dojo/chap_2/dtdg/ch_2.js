dojo.provide("dtdg.ch_2");

/***** fibonacci ******/
dtdg.ch_2.fib_series = function(x){
	if(x<0)
		throw exception("Illegal Argument");
	if(x <= 1)
		return x;
		
	return dtdg.ch_2.fib_series(x-1) + dtdg.ch_2.fib_series(x-2);
}

/***** geany ******/
dtdg.ch_2.genie = function(){}
dtdg.ch_2.genie.prototype._predictions = [
	"As I see it, yes",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"It is certain",
	"It is decidedly so",
	"Most likely",
	"My reply is no",
	"My sources say no",
	"Outlook good",
	"Outlook not so good",
	"Reply hazy, try again",
	"Signs point to yes",
	"Very doubtful",
	"Without a doubt",
	"Yes",
	"Yes - definitely",
	"You may rely on it"
];

dtdg.ch_2.genie.prototype.initialize = function(){
	var label = document.createElement("p");
	label.innerHTML = "Ask a question, the geany knows the answer...";
	
	var question = document.createElement("input");
	question.size = 50;
	
	var button = document.createElement("button");
	button.innerHTML = "Ask!";
	button.onclick = function(){
		alert(dtdg.ch_2.genie.prototype._getPrediction());
		question.value = "";
	}
	
	var container = document.createElement("div");
	container.appendChild(label);
	container.appendChild(question);
	container.appendChild(button);
	
	dojo.body().appendChild(container);
	
	dtdg.ch_2.genie.prototype._getPrediction = function(){
		var idx = Math.round(Math.random()*19);
		return this._predictions[idx];
	}
}

/***** geany 2 ******/
dtdg.ch_2.genie_2 = function(){}
dojo.extend(dtdg.ch_2.genie_2,{		// extend geany
	_predictions : [
		"As I see it, yes",
		"Ask again later",
		"Better not tell you now",
		"Cannot predict now",
		"Concentrate and ask again",
		"Don't count on it",
		"It is certain",
		"It is decidedly so",
		"Most likely",
		"My reply is no",
		"My sources say no",
		"Outlook good",
		"Outlook not so good",
		"Reply hazy, try again",
		"Signs point to yes",
		"Very doubtful",
		"Without a doubt",
		"Yes",
		"Yes - definitely",
		"You may rely on it"
	],
	
	initialize : function(){
		var label = document.createElement("p");
		label.innerHTML = "Ask a question, the geany knows the answer...";
		
		var question = document.createElement("input");
		question.size = 50;
		
		var button = document.createElement("button");
		button.innerHTML = "Ask!";
		button.onclick = function(){
			alert(dtdg.ch_2.genie_2.prototype._getPrediction());
			question.value = "";
		}

		var container = document.createElement("div");
		container.appendChild(label);
		container.appendChild(question);
		container.appendChild(button);
		
		dojo.body().appendChild(container);
	},
	
	_getPrediction : function( ) {
		var idx = Math.round(Math.random( )*19)
		return this._predictions[idx];
	}

});