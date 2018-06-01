var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'papoteCarApi' });
});
router.post('/login', usersController.login)

module.exports = router;
