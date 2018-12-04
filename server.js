var send = require('./lib/send.js');
var temp = require('./lib/temp_pressure.js');
//Send data to the groundstation
send.textToGround('Started', "Server");