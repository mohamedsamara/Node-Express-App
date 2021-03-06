let mongoose = require('mongoose');

// Movie Schema
let movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  year: {
    type: String
  },  
  imdbRating: {
    type: Number
  },
  country: {
    type: String
  },
  language: {
    type: String
  }
});

let Movie = (module.exports = mongoose.model('Model', movieSchema, 'movie'));
