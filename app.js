const express = require("express");
require("dotenv/config");
const routes = require("./routes/productsRoutes");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/", routes);

mongoose.connect(process.env.DB_URL, () => {
  console.log("Connected to database");
});

app.listen(3000, () => console.log("Example app listening on port : 3000!"));
