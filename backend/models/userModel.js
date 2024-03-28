const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  itemName: String,
  itemPrice: String,
  
});

const user = mongoose.model('user', userSchema, 'items');

module.exports = user;
