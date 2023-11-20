const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const myEvent = require("./models/events.js");
// configuro express per leggere i dati in formato json
app.use(express.json());

// configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// Passare l'oggetto come argomento al costruttore

const objNewEvent = new myEvent({
    id: 'id123',
    title: 'Titolo dell\'evento',
    description: 'Descrizione dell\'evento',
    date: '2023-01-01',
    maxSeats: 100
});

console.log(objNewEvent);

// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const routerEvents = require('./routers/events.js');
app.use("/", routerEvents);



app.listen(port, () => {
    console.log(`Server partito su porta http://localhost:${port}`)
    
  

})
   

