const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./db.config");
const mongoose = require("mongoose");
const app = express();

//Permit to use variable environment
const dotenv = require("dotenv");
dotenv.config();

//Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

///////////////////////////////////////////////// MongoDB /////////////////////////////////////////////////////////////////
// Mongodb connection
const uri =
  "mongodb+srv://" +
  dbConfig.MONGO_USER +
  ":" +
  dbConfig.MONGO_PASSWORD +
  "@" +
  dbConfig.MONGO_HOST +
  "/" +
  dbConfig.MONGO_DB +
  "?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.once("open", function () {
  console.log("Connecté avec succès à MongoDB");
});

////////Redirection of the URLs to the corresponding data access file////////

//Notes
const notes = require("./routes/notes");
app.use("/notes", notes);

const port = process.env.PORT || process.env.API_PORT || 3007;

// start of application
const server = app.listen(port, () =>
  console.log(`Le serveur a démarré sur http://localhost:${port}`)
);

module.exports = server;
