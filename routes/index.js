var dataFile = require('../datafile/dataimg');
var express = require('express');
var router = express.Router();
/* GET home page. */


router.get('/', function(req, res, next) {
    res.render('index', { title: 'abba', data: dataFile});
});

module.exports = router;
