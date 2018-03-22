var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(ip);
  res.render('index', { title: 'Express', ip: ip, serverHost: os.hostname() });
});

router.get('/a', function (req, res, next) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(ip);
  res.render('index', { title: 'Express', ip: ip, serverHost: os.hostname(),data: 'a' });
});

router.get('/b', function (req, res, next) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(ip);
  res.render('index', { title: 'Express', ip: ip, serverHost: os.hostname(),data:'b' });
});

module.exports = router;
