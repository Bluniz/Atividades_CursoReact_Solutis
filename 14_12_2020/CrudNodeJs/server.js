const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config"); //* Necessário para ler variaveis de ambiente .env
const helpers = require("./helpers/index"); //* Arquivo de utilidades
const routes = require("./src/routes");
const app = express();
//  const MongoClient = require("mongodb").MongoClient;

const uri = helpers.getUrl(
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE
);

helpers.getDatabase(app, uri);

/* //! Conexão com o banco mongo
global.connection = MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err);
  db = client.db(process.env.DATABASE);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}); */

app.use(bodyParser.urlencoded({ extended: true }));

// Engine de View
app.set("view engine", "ejs");

app.use(routes);
