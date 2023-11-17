const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

// configuro express per leggere i dati in formato json
app.use(express.json());

// configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const arrayEvent = [];
// Passare l'oggetto come argomento al costruttore

const event = new Event({
    id: 'id123',
    title: 'Titolo dell\'evento',
    description: 'Descrizione dell\'evento',
    date: '2023-01-01',
    maxSeats: 100
});



// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const routerEvents = require('./routers/events.js');
app.use("/", routerEvents);



app.listen(port, event, () => {
    console.log(`Server partito su porta http://localhost:${port}`)
    
  

})
   

