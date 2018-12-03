var send = require('./lib/send.js');

for(var i= 0; i<100000; i++){
	send.toGround('This is a test '+ i);
}
