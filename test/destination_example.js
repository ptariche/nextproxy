'use strict';

const NET  = require('net');
const PORT = 8888;

let server = NET.createServer(function (socket) {
  console.log('Client connected to server');

  socket.on('close', function () {
    console.log('Client disconnected from server');
  });

  socket.on('data', function (buffer) {
    console.log('TCP Buffer: ' + buffer);
    socket.write(buffer);
  });

  socket.on('error', function (err) {
    console.log('Error: ' + err.soString());
  });
});

server.listen(PORT);
console.log('Destination example listening on port:', PORT);
