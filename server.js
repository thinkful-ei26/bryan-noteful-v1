'use strict';

// Load array of notes
const data = require('./db/notes');

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...

const express = require('express');

const app = express();

const logger = require('./middleware/logger');

app.use(logger);

app.use(express.static('public'));

app.get('/api/notes', (request, response) => {
  let request1 = request.query.searchTerm;

  function titleContains(searchResults) {
    return (searchResults.title.toLowerCase().includes(this) || searchResults.content.toLowerCase().includes(this));
  }
  // this in this context refers to "request 1" on line 24. .filter(function, thisValue). this refers to this value in context of .filter.

  let results = data.filter(titleContains, request1); 
  response.json(data, results);
});

app.get('/api/notes/:id', (request, response) => {
  // console.log('request params2 is', request.params);
  let noteObject = data.find(item => item.id === Number(request.params.id));
  response.json(noteObject);
});

app.listen(8000, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});


