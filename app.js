const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const seedDB = require('./seeds');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/realchecklist');
seedDB();

app.get('/', (req, res) => {
  res.render('landing.ejs');
});

app.get('/campgrounds', (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('./campgrounds/index.ejs', { campgrounds: campgrounds });
    }
  });
});

app.post('/campgrounds', (req, res) => {});

app.get('/campgrounds/:id', (req, res) => {});

app.post('/campgrounds/:id', (req, res) => {});

//COMMENT ROUTES

app.get('/campgrounds/:id/comments/new', (req, res) => {});

app.listen(3000, () => {
  console.log('tudo funcionando de boinha');
});
