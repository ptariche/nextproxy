# Next Proxy
A Node Proxy service

[![NPM](https://nodei.co/npm/nextproxy.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nextproxy/) [![NPM](https://nodei.co/npm-dl/nextproxy.png?months=6&height=3)](https://nodei.co/npm/nextproxy/)

    npm install nextproxy

## Example
  ```js
  'use strict';

  const PORT           = 5000;
  const DESTINATION_P  = 8888;
  const DESTINATION_IP = '127.0.0.1';
  const NEXTPROXY      = require('nextproxy');
  const APP            = new NEXTPROXY();

  APP.destination(DESTINATION_IP, DESTINATION_P);
  APP.listen(PORT);

  APP.on('error', function (err) {
    console.log(err.stack);
  });

  console.log('Listening on port: ' + PORT + ' proxying to ' + DESTINATION_IP + ':' + DESTINATION_P);
  ```
