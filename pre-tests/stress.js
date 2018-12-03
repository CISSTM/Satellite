var send = require('../lib/send.js');
var fs = require('fs');
for(var i= 0; i<10000; i++){
	send.toGround('This is a test '+ i);
}

fs.unlink('data.txt', function(err) {
	if (err) throw err;
	console.log('passed test, removed all temp files');
});
