const eventsDb = require('../db/events.json')
const fs = require("fs");
const myEvent = require('../models/events');

// Funzione index
const index = function(req, res) {
    res.json(eventsDb);
}


// funzione store per salvare un nuovo evento nel db
function store (req, res) {
    const newEvent = req.body;
 
    res.end(newEvent)
}

const update = function(req, res) {
    
    
    res.end("ciaooo");
}
 
 
module.exports = {
    index,
    store,
    update
}