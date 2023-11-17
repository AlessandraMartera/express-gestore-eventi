const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
// const routeEvents = require('./routes/events.js');
const routerEvents = require('./routers/events.js');
app.use("/events", routerEvents);

app.listen(port, () => {
    console.log(`Server partito su porta http://localhost:${port}`)
   })
   