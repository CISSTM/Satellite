//This file will contain all the functions needed to send to the groundstation
module.exports = {
	toGround: function (toSend, err){
		if (err) throw err;
		console.log(toSend);
	}
};
