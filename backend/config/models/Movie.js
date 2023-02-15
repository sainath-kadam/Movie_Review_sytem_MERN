const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  
  },
  director: {
    type: String,
    
  },
  actor: {
    type: String,
    
  },
 
  released_date: {
    type: Date,
    
  },
  
  description: {
    type: String,
  
  },
  // updated_date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);