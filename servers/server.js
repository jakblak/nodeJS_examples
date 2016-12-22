const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swig = require('swig');
const port = 8000;
const app = express();

mongoose.connect('mongodb://localhost/meetings');

app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log('app listening on port ' + port);
});

module.exports = app;