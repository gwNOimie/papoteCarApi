var express = require('express');
var router = express.Router();
var stepsController = require('../controllers/stepsController');

// Define specific steps' routes
router.get('/', stepsController.findAll);
router.get('/:id', stepsController.findById);
router.post('/', stepsController.create);
router.put('/:id', stepsController.update);
router.delete('/:id', stepsController.delete);

module.exports = router;
