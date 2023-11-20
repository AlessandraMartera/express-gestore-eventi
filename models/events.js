const fs = require('fs');
const path = require('path');
 const pathData = path.resolve(__dirname, '..', 'db', 'events.json');

class MyEvent {

    
    constructor({ id, title, description, date, maxSeats }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

     // Metodo per leggere gli eventi dal file JSON
     static readEvents() {
       
        try {
            const events = fs.readFileSync(pathData, 'utf-8');
            return JSON.parse(events);
        } catch (error) {
            // Gestisci gli errori di lettura
            console.error("Errore durante la lettura dei dati:", error);
            return [];
        }
    }

    // Metodo per salvare gli eventi nel file JSON
    static saveEvents(events) {
        try {
            fs.writeFileSync(pathData, JSON.stringify(events, null, 2), 'utf8');
            console.log('Dati salvati con successo.');
        } catch (error) {
            // Gestisci gli errori di scrittura
            console.error("Errore durante la scrittura dei dati:", error);
        }
    }

    // Metodo per aggiungere un nuovo evento
    static addEvent(newEvent) {
        const existingEvents = MyEvent.readEvents();
        existingEvents.push(newEvent);
        MyEvent.saveEvents(existingEvents);
    }

    // Per aggiungere un nuovo evento
    static store(id, title, description, date, maxSeats) {
        // Ottenere la lista degli eventi esistenti
        const existingEvents = MyEvent.readEvents();
    
        // Verifica se esiste già un evento con lo stesso ID
        const existingEvent = existingEvents.find(event => event.id === id);
    
        // Se non esiste, aggiungi il nuovo evento e salvalo nel file JSON
        if (!existingEvent) {
            const newEvent = {
                id,
                title,
                description,
                date,
                maxSeats
            };
    
            MyEvent.addEvent(newEvent);
            console.log('Evento creato ed è stato salvato con successo.');
        } else {
            console.log('L\'evento con lo stesso ID già esiste.');
        }
    }

}


module.exports = MyEvent;