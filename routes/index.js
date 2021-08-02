var express = require('express');
var router = express.Router();
var dictionary = require('./dictionary');

const cors = require('./cors');

router.options('/*', cors.corsWithOptions, function(req, res, next) { res.statusCode = 200; });
router.get('/api/v2/definitions/en-US/entries/*', cors.cors, function(req, res, next) {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json')
  res.setHeader('charset', 'utf-8')
  var response  = dictionary.getDefinition(Object.values(req.params))
  res.json(response);
});

router.get('/api/v2/audio/en-US/entries/*', cors.cors, function(req, res, next) {
  res.statusCode = 200;
  res.header('Content-Type', 'application/json')
  res.setHeader('charset', 'utf-8')
  var response  = dictionary.getAudioSpeech(Object.values(req.params))
  res.json(response);
});

router.get('/*', cors.cors, function(req, res, next) {
  res.statusCode = 403;
  res.end("Cannot GET /" + Object.values(req.params))
});

module.exports = router;
