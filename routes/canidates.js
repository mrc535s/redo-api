var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Canidate = require('../models/Canidate');

/* GET /canidates listing. */
router.get('/', function(req, res, next) {
  Canidate.find(function (err, canidates) {
    if (err) return next(err);
    res.json(canidates);
  });
});

/* POST /canidates */
router.post('/', function(req, res, next) {
  Canidate.create(req.body, function (err, canidate) {
    if (err) return next(err);
    res.json(canidate);
  });
});

/* GET /canidates/id */
router.get('/:id', function(req, res, next) {
  Canidate.findById(req.params.id, function (err, canidate) {
    if (err) return next(err);
    res.json(canidate);
  });
});

/* PUT /canidates/:id */
router.put('/:id', function(req, res, next) {
  Canidate.findByIdAndUpdate(req.params.id, req.body, function (err, canidate) {
    if (err) return next(err);
    res.json(canidate);
  });
});

/* DELETE /canidates/:id */
router.delete('/:id', function(req, res, next) {
  Canidate.findByIdAndRemove(req.params.id, req.body, function (err, canidate) {
    if (err) return next(err);
    res.json(canidate);
  });
});

module.exports = router;
