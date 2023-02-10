const express = require("express");
require("dotenv/config");
const routes = require("./routes/productsRoutes");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const db = require('./mongoose')

app.use(bodyParser.json());
app.use("/", routes);

app.listen(3000, () => console.log("Example app listening on port : 3000!"));
