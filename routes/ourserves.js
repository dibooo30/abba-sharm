var dataFile = require('../datafile/dataimg');
var express = require('express');
var router = express.Router();
/* GET home page. */


router.get('/sea-tripes', function(req, res, next) {
    res.render('./our-serves/sea-tripes', { title: 'abba', data: dataFile});
});

router.get('/cultural-tripes', function(req, res, next) {
    res.render('./our-serves/cultural-tripes', { title: 'abba', data: dataFile});
});

router.get('/inside-city', function(req, res, next) {
    res.render('./our-serves/inside-city', { title: 'abba', data: dataFile});
});

module.exports = router;
