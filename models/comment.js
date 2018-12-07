const mongoose = require('body-parser');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model('Comment', commentSchema);
