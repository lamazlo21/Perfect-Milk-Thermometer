const sensor = require('ds18x20');

let temp;
exports.temp = sensor.get('28-00000a14b60f');

