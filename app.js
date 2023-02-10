//require express
const express = require("express");
//importing routes
const routes = require("./routes/productsRoutes");
const app = express();
//importing mongoose 
const mongoose = require("mongoose");
//importing body pasrse for json data
const bodyParser = require('body-parser');
//importing database from mongoose
const db = require('./mongoose')

//middleware
app.use(bodyParser.json());
app.use("/", routes);


//make app to listen
app.listen(3000, () => console.log("Example app listening on port : 3000!"));
