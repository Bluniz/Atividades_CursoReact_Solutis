const express = require("express");
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectID;
require("dotenv/config"); //* Necessário para ler variaveis de ambiente .env
const helpers = require("./helpers/index"); //* Arquivo de utilidades

const app = express();
const MongoClient = require("mongodb").MongoClient;

const uri = helpers.getUrl(
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE
);

//! Conexão com o banco mongo
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err);
  db = client.db(process.env.DATABASE);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

// Engine de View
app.set("view engine", "ejs");

// Rota inicial, irá renderizar o index.ejs
app.get("/", function (req, res) {
  res.render("index.ejs");
});

// Irá pegar os dados do banco
app.get("/", (req, res) => {
  var cursor = db.collection("usuario").find();
});

app.post("/show", (req, res) => {
  //* criar ou utilizar a coleção usuario, que irá armazenar nossos dados
  db.collection("usuario").save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("Salvo no Banco de Dados");
    res.redirect("/show");
  });
});

app.get("/show", (req, res) => {
  db.collection("usuario")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      res.render("show.ejs", { data: results });
    });
});

app.get("/show", (req, res) => {
  db.collection("usuario")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      res.render("show.ejs", { data: results });
    });
});

app
  .route("/edit/:id")
  .get((req, res) => {
    var id = req.params.id;

    db.collection("usuario")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return res.send(err);
        res.render("edit.ejs", { data: result });
      });
  })
  .post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;

    db.collection("usuario").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname,
        },
      },
      (err, result) => {
        if (err) return res.send(err);
        res.redirect("/show");
        console.log("Atualizado no Banco de Dados");
      }
    );
  });

app.route("/delete/:id").get((req, res) => {
  var id = req.params.id;

  db.collection("usuario").deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return res.send(500, err);
    console.log("Deletado do Banco de Dados!");
    res.redirect("/show");
  });
});
