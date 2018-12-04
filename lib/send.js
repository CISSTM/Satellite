//This file will contain all the functions needed to send to the groundstation
var save = require('./save.js');
var timesSend = 0;
module.exports = {
	numberToGround: function (topic, data, err){
		if (err) throw err;
		var toSend = '{"'+ topic + '": '+ data + ', "sendTimes": ' + timesSend + '}';
		timesSend++;
		//The program that sends data to the ground
		save.toFile(toSend);
		//Data to the console
		console.log(toSend);
	},

	textToGround: function (topic, data, err){
		if (err) throw err;
		var toSend = '{"'+ topic + '": "'+ data + '"' + ', "sendTimes": ' + timesSend + '}';
		timesSend++;
		//The program that sends data to the ground
		save.toFile(toSend);
		//Data to the console
		console.log(toSend);
	}
};
