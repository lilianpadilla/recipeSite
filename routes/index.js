var express = require('express');
var router = express.Router();

const dataToSend = {
  title: 'Express',
  isSpecial: false
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Home'});
});

module.exports = router;
