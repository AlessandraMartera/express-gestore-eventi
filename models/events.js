const fs = require('fs');
const path = require('path');
const pathData = path.resolve(__dirname + '..' + 'db' + 'events.json')

class myEvent {
    constructor(obj) {
        // Se il primo argomento è un oggetto, usalo direttamente
        const { id, title, description, date, maxSeats } = obj;
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    
    }

 
    readEvent(){
        const event = fs.readFileSync(pathData, "utf-8");
        
        // Converto la stringa in un array di oggetti
        return JSON.parse(event);
    }

    
  
    saveEvent(newEvent){

        const events = readEvent();
        events.push(newEvent);
        
        fs.writeFile(path.resolve(__dirname, "../db", 'events.json'), JSON.stringify(events, null, 2), 'utf8');
        console.log("Dati salvati con successo.");
    }
}

module.exports = myEvent