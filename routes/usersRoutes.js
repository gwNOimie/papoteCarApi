var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

// Define specific users' routes
router.get('/', usersController.findAll);
router.get('/:id', usersController.findById);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
