const sensor = require('ds18x20');
const gpio = require('onoff').Gpio;
const red = new gpio(16, 'out');
const green = new gpio(20, 'out');
const blue = new gpio(21, 'out');

let temp;

setInterval(()=>{
	exports.temp = sensor.get('28-00000a14b60f');	
	switch(true){
		case (exports.temp<55):
			green.writeSync(1);
			red.writeSync(0);
			blue.writeSync(1);
			break;
		case (exports.temp>=55&&exports.temp<70):
			green.writeSync(1);
                        red.writeSync(0);
                        blue.writeSync(0);
                        break;
		case (exports.temp>=70):
                        green.writeSync(0);
                        red.writeSync(1);
                        blue.writeSync(0);
                        break;
                }	
},500);

