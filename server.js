const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const routerEvents = require('./routers/events.js');
app.use("/events", routerEvents);

app.listen(port, () => {
    console.log(`Server partito su porta http://localhost:${port}`)
   })
   