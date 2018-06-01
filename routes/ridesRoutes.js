var express = require('express');
var router = express.Router();
var ridesController = require('../controllers/ridesController');

// Define specific rides' routes
router.get('/', ridesController.findAll);
router.get('/:id', ridesController.findById);
router.post('/', ridesController.create);
router.put('/:id', ridesController.update);
router.delete('/:id', ridesController.delete);

module.exports = router;
