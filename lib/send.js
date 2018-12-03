//This file will contain all the functions needed to send to the groundstation
var save = require('./save.js');
module.exports = {
	toGround: function (toSend, err){
		if (err) throw err;
		//The program that sends data to the ground
		save.toFile(toSend);
		//Data to the console
		console.log(toSend);
	}
};
