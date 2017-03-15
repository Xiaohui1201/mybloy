var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.redirect('/posts');
});
router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/signout', require('./signout'));
router.use('/posts', require('./posts'));

module.exports = router;
