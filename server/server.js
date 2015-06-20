var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://assessment:assessmentEvents2014@ds037977.mongolab.com:37977/events');

app.use('/api/events', require('./api/event'));

app.listen(8080);

exports = module.exports = app;
