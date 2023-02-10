const express = require("express");
const routes = require("./routes/productsRoutes");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
app.use("/", routes);

mongoose.connect(process.env.DB_URL, () => {
  console.log("Connected to database");
});

app.listen(3000, () => console.log("Example app listening on port : 3000!"));
