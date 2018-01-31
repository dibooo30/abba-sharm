var express = require('express');
var router = express.Router();
var dataFile = require('../datafile/dataimg');

var galleryPhotos = [];
dataFile.forEach(item => {
  galleryPhotos = galleryPhotos.concat(item.imegas);
});

/* GET users listing. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'abba', data: dataFile});
});

router.get('/serves', function(req, res, next) {
  res.render('serves', {data: dataFile});
});

router.get('/pormotion', function(req, res, next) {
  res.render('pormotion', {title: 'abba', data: dataFile });
});

router.get('/galery', function(req, res, next) {
  res.render('galery', {title: 'abba', pic: galleryPhotos});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'abba'});
});
module.exports = router;
