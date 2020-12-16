const express = require("express");
require("dotenv/config"); //* Necessário para ler variaveis de ambiente .env
const helpers = require("./helpers/index"); //* Arquivo de utilidades
const routes = require("./src/routes");
const app = express();
const cors = require('cors');
// Gera URL do banco
const uri = helpers.getUrl(
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE
);

// Conecta com o banco
helpers.getDatabase(app, uri);

// Config 
app.use(cors());
app.use(express.json());

// Engine de View
app.set("view engine", "ejs");

app.use(routes);
