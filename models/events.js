const fs = require('fs');
const path = require('path');
const pathData = path.resolve(__dirname + '..' + 'db' + 'events.json')

class Event {
    constructor(id, title, description, date, maxSeats) {
        if (typeof id === 'object') {
            // Se il primo argomento è un oggetto, usalo direttamente
            const { id, title, description, date, maxSeats } = id;
            this.id = id;
            this.title = title;
            this.description = description;
            this.date = date;
            this.maxSeats = maxSeats;
        } else {
            // Altrimenti, usa gli argomenti separati
            this.id = id;
            this.title = title;
            this.description = description;
            this.date = date;
            this.maxSeats = maxSeats;
        }
    }


    readEvent(){
        const event = fs.readFileSync(pathData, "utf-8");
        
        // Converto la stringa in un array di oggetti
        return JSON.parse(event);
    }

    saveEvent(newEvent){

        const events = fs.readFileSync(pathData, "utf-8");
        events.push(newEvent)

        fs.writeFileSync(JSON.stringify(events, null, 2))
    }
}

module.exports = Event