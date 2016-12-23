const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./Book.model');

const port = 8080;
const db = 'mongodb://localhost/example';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) =>
  res.send('happy to be here'));

app.get('/books', (req, res) => {
  console.log('getting all books');
  Book.find({})
    .exec((err, books) => {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
    }
 })
});

app.get('/books/:id', (req, res) =>
 // console.log('getting all books');
  Book.findOne({
    _id: req.params.id
    })
    .exec((err, books) => {
      if(err) {
        res.send('error occured')
      } else {
        console.log(books);
        res.json(books);
    }
}));

app.post('/book', (req, res) => {
  let newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save((err, book) => {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  })
});

app.post('/book2', (req, res) =>
  Book.create(req.body, (err, book) => {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
  }
}));

app.put('/book/:id', (req, res) =>
  Book.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { title: req.body.title }
  }, {upsert: true}, (err, newBook) => {
    if (err) {
      res.send('error updating ');
    } else {
      console.log(newBook);
      res.send(newBook);
  }
}));

app.delete('/book/:id', (req, res) =>
  Book.findOneAndRemove({
    _id: req.params.id
  }, (err, book) => {
    if(err) {
      res.send('error removing')
    } else {
      console.log(book);
      res.status(204);
  }
}));

app.listen(port, () =>
  console.log('app listening on port ' + port));