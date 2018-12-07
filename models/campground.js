const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const campgroundSchema = new Schema({
  name: String,
  image: String,
  description: String,
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

module.exports = mongoose.model('Campground', campgroundSchema);
