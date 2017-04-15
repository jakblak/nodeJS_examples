var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

  socket.on('send-message', (data) => {
    console.log(data.text);
    io.emit('message-received', data);
  });

   socket.on('event1', (data) => {
      console.log(data.msg);
    });

   socket.emit('event2', {
      msg: 'Server to client, do you read me? Over.'
    });

   socket.on('event3', (data) => {
      console.log(data.msg);
      socket.emit('event4', {
        msg: 'Loud and clear :)'
      });
    });

});

server.listen(port, () => {
  console.log("Listening on port " + port);
});