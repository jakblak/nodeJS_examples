var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var swig = require('swig');
var port = 8000;
var app = express();

mongoose.connect('mongodb://localhost/meetings');

app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('app listening on port ' + port);
});