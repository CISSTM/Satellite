var fs = require('fs');
exports.toFile = function (toSend, err) {
	if (err) throw err;
	var toSave = toSend + "\n";
	fs.appendFile('data.txt', toSave, function (err) {
		if (err) throw err;
	});
}
