var send = require('./send.js');
let sendingInterval = setInterval(function(){ sendThisData()  }, 200);

function rotation(){
    var rotationData = 120;
    return rotationData;
}

sendData(){
    send.toGround('{"rotation": '+ gyro() + '}');
}

function stopSending() {
	clearInterval(sendingInterval);
};