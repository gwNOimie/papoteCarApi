var express = require('express');
var router = express.Router();
var participationsController = require('../controllers/participationsController');

// Define specific participations' routes
router.get('/', participationsController.findAll);
router.get('/:id', participationsController.findById);
router.post('/', participationsController.create);
router.put('/:id', participationsController.update);
router.delete('/:id', participationsController.delete);

module.exports = router;
