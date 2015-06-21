var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+'../../client'));

mongoose.connect('mongodb://assessment:assessmentEvents2014@ds037977.mongolab.com:37977/events');

app.use('/api/events', require('./api/event'));

var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: true,
  path: '/socket.io-client'
});
require('./socketio')(socketio);

server.listen(8080);

exports = module.exports = app;
