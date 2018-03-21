var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  console.log(ip);
  res.render('index', { title: 'Express', ip: ip });
});

module.exports = router;
