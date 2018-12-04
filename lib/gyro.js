var send = require('./send.js');
let sendingInterval = setInterval(function(){ sendThisData()  }, 200);

function rotation(){
    var rotationData = 120;
    return rotationData;
}

function sendData(){
    send.numberToGround("rotation", rotation());
}

function stopSending() {
	clearInterval(sendingInterval);
};