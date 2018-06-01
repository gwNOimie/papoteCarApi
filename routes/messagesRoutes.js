var express = require('express');
var router = express.Router();
var messagesController = require('../controllers/messagesController');

// Define specific messages' routes
router.get('/', messagesController.findAll);
router.get('/:id', messagesController.findById);
router.post('/', messagesController.create);
router.put('/:id', messagesController.update);
router.delete('/:id', messagesController.delete);

module.exports = router;
