const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Definisci le route relative agli eventi
router.get('/', eventController.index);

module.exports = router;