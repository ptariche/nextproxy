'use strict';

const NET     = require('net');
const DEBUG   = require('debug')('nextproxy:proxy');
const EMITTER = require('events');

module.exports = class nextProxy extends EMITTER {
  constructor() {
    super();
    this._destination = {};
  };

  destination(ip, port) {
    this._destination.port = port;
    this._destination.ip   = ip;
  };

  listen() {
    DEBUG('listen');
    const server = NET.createServer(this.callback());
    return server.listen.apply(server, arguments);
  };

  err(error) {
    this.emit('error', error);
  };

  close() {
    console.log('Connection to foreign proxy closed');
  };

  callback() {
    return (socket) => {
      let client = NET.connect(this._destination.port, this._destination.ip);
      socket.pipe(client).pipe(socket);
      socket.on('error', this.err);
      socket.on('close', this.close);
    };
  };

};
