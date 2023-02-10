//requiring mongoose
const mongoose = require("mongoose");

//mongoose mongodb url
mongoose.connect("mongodb+srv://admin:admin@cluster0.qpborbx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//database connection
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

db.on("error", (error) => {
  console.error(`An error occured while connecting to MongoDB: ${error}`);
});

module.exports = db;
