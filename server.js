'use strict';

// Load array of notes
const data = require('./db/notes');

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/api/notes', (request, response) => {
  response.json(data);
});

app.get('/api/notes/:id', (request, response) => {
// console.log('request params iceCream =', request.params.iceCream);
  let noteObject = data.find(item => item.id === Number(request.params.id));
  response.json(noteObject);
});

app.listen(8000, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});


