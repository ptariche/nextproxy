'use strict';

const PORT           = 5000;
const DESTINATION_P  = 8888;
const DESTINATION_IP = '127.0.0.1';
const NEXTPROXY      = require('./lib/nextproxy');
const APP            = new NEXTPROXY();

APP.destination(DESTINATION_IP, DESTINATION_P);
APP.listen(PORT);

APP.on('error', function (err) {
  console.log(err.stack);
});

console.log('Listening on port: ' + PORT + ' proxying to ' + DESTINATION_IP + ':' + DESTINATION_P);
