const eventsDb = require('../db/events.json')
const fs = require("fs");
const Event = require('../models/events');
const index = function(req, res) {
    res.json(eventsDb);
}

function store (req, res) {
   
/*
    // Verifico che i parametre siano presenti nella richiesta
    if (!req.body.title) {
        throw new Error("Il parametro 'title' è obbligatorio");
    }
    
    if (!req.body.description) {
        throw new Error("Il parametro 'description' è obbligatorio");
    }

    
    if (!req.body.date) {
        throw new Error("Il parametro 'date' è obbligatorio");
    }

  
    if (!req.body.maxSeats || isNaN(req.body.maxSeats)) {
        throw new Error("Il parametro 'maxSeats' è obbligatorio e deve essere un numero");
    }
*/
    Event.store(req.body);
  
    res.status(200).json({ message: 'Evento creato con successo' });



    const json = JSON.stringify(eventsDb, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "..", "db", "events.json"), json);
    
    // res.end("ricetta salvata");
}

const update = function(req, res) {
    
    
    res.end("ciaooo");
}
 
 
module.exports = {
    index,
    store,
    update
}