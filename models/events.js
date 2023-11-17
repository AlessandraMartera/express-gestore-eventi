const fs = require('fs');
const path = require('path');
const pathData = path.resolve(__dirname + '..' + 'db' + 'events.json')

class Event {
    id; 
    title; 
    description; 
    date; 
    maxSeats;

    constructor(id, title, description, date, maxSeats) {
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

    saveEvent(){
        console.log("ciao")
    }
}

module.exports = Event