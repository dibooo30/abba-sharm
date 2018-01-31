var express = require('express');
var router = express.Router();
var dataFile = require('../datafile/dataimg');

router.get('/alkalaa', function(req, res, next) {
    res.render('./serves/alkalaa', {title: 'abba', data: dataFile})
});
router.get('/ras-mohmed', function(req, res, next) {
    res.render('./serves/ras-mohmed', {title: 'abba', data: dataFile})
});
router.get('/perameds', function(req, res, next) {
    res.render('./serves/perameds', {title: 'abba', data: dataFile})
});
router.get('/dolphen', function(req, res, next) {
    res.render('./serves/dolphen', {title: 'abba', data: dataFile})
});
router.get('/canyon', function(req, res, next) {
    res.render('./serves/canyon', {title: 'abba', data: dataFile})
});
router.get('/sant-catreen', function(req, res, next) {
    res.render('./serves/sant-catreen', {title: 'abba', data: dataFile})
});
router.get('/sumareen', function(req, res, next) {
    res.render('./serves/sumareen', {title: 'abba', data: dataFile})
});
router.get('/aqua-park', function(req, res, next) {
    res.render('./serves/aqua-park', {title: 'abba', data: dataFile})
});
router.get('/safary', function(req, res, next) {
    res.render('./serves/safary', {title: 'abba', data: dataFile})
});
module.exports = router;