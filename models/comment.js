const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model('Comment', commentSchema);
