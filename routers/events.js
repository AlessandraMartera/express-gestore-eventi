const express = require('express');
const router = express.Router();
const eventController = require('./../controllers/events');

// Definisci le route relative agli eventi
router.get('/', eventController.index);

router.post('/store', eventController.store);

router.put('/update/:id', eventController.update);

module.exports = router;