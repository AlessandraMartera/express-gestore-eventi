const eventsDb = require('../db/events.json')
const fs = require("fs");
const Event = require('../models/events')

const index = function(req, res) {
    res.json(eventsDb);
}

function store (req, res) {
    const newEvent = req.body;
    eventsDb.push(newEvent);

    const json = JSON.stringify(eventsDb, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "..", "db", "events.json"), json);
    
    res.end("ricetta salvata");
}

const update = function(req, res) {
    
    
    res.end("ciaooo");
}
 
 
module.exports = {
    index,
    store,
    update
}