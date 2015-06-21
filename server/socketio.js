function onDisconnect(socket) {
}

function onConnect(socket) {
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  require('./api/event/event.socket').register(socket);
}

module.exports = function (socketio) {
  socketio.on('connection', function (socket) {
    socket.address = socket.handshake.address.address + ':' + socket.handshake.address.port;

    socket.connectedAt = new Date();

    socket.on('disconnect', function () {
      onDisconnect(socket);
    });

    onConnect(socket);
  });
};
