const eventsDb = require('../db/events.json')
const fs = require("fs")
const index = function(req, res) {
    res.json(eventsDb);
}

const store = function(req, res) {
    const newEvents = req.body;
    // eventsDb.push(newEvents);

    // const json = JSON.stringify(eventsDb, null, 2);
    // fs.writeFileSync(path.resolve(__dirname, "..", "db", "events.json"), json);
    
    // res.end("evento salvata")

    res.json(newEvents)
}

const update = function(req, res) {
    
    
    res.end("update");
}
 
 
module.exports = {
    index,
    store,
    update
}