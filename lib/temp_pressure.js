var send = require('./send.js');

let sendingInterval = setInterval(function(){ sendData()  }, 200);
var startingPress = 1013.25;

function temp(){
	//The temp function needs to be here
	//The temp can be send to the ground
	var currentTemp = -12;
	return currentTemp;
}

function pressure(){
	//The pressure function needs to be here
	var currentPress = 1000;
	return currentPress;
}

function altitude(P0, P, T){
	var currentAlt = ((Math.pow((P0/P),(1/5.257))-1)*(T+273.15))/(0.0065);
	return currentAlt;
}

function sendData (){
	send.numberToGround("temperature", temp());
	send.numberToGround("pressure", pressure());
	send.numberToGround("altitude", altitude(startingPress, pressure(), temp()));
}
function stopSending() {
	clearInterval(sendingInterval);
};
