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
const event = new myEvent(10, 'zoom meeting', 'corso React Boolean', '2023-12-01', 26);

myEvent.store(34, 'Martatona', 'Descrizione della maratona', '2023-12-31', 40);
console.log(event);

// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const routerEvents = require('./routers/events.js');
app.use("/", routerEvents);



app.listen(port, () => {
    console.log(`Server partito su porta http://localhost:${port}`)
    
  

})
   

