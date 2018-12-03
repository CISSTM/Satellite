//This file will contain all the functions needed to send to the groundstation
var save = require('./save.js');
module.exports = {
	toGround: function (toSend, err){
		if (err) throw err;
		save.toFile(toSend);
		console.log(toSend);
	}
};
