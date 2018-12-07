const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/realchecklist');

let campgrounds = [
  {
    name: 'Linux',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description: 'A Linux base computer'
  },
  {
    name: 'Linux1',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description: 'A Linux1 base computer'
  },
  {
    name: 'Linux2',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description: 'A Linux2 base computer'
  }
];

app.listen(3000, () => {
  console.log('tudo funcionando de boinha');
});
