var send = require('./send.js');
//let tempInterval = setInterval(function(){ temp()  }, 1000);
var startingPress = 1013.25;

function temp(){
	//The temp function needs to be here
	//The temp can be send to the ground
	var currentTemp = 15;
	return currentTemp;
}

function pressure(){
	//The pressure function needs to be here
	var currentPress = 900;
	return currentPress;
}

function altitude(P0, P, T){
	var currentAlt = ((Math.pow((P0/P),(1/5.257))-1)*(T+273.15))/(0.0065);
	return currentAlt;
}

console.log(altitude(startingPress, pressure(), temp()));
/*exports.stopSendingTemp = function(){
	clearInterval(tempInterval);
};*/
