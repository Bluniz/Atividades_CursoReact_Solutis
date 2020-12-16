const ObjectId = require("mongodb").ObjectID;

class UsersController {
  index(request, response) {
    response.render("index.ejs");
    global["collection"] = global.db.collection("usuario").find();
  }

  create(request, response) {
    //* criar ou utilizar a coleção usuario, que irá armazenar nossos dados
    global["collection"] = global.db
      .collection("usuario")
      .save(request.body, (err, result) => {
        if (err) return console.log(err);
        console.log(global.db);

        console.log("Salvo no Banco de Dados");
        response.redirect("/show");
      });
  }

  show(request, response) {
    global["collection"] = global.db
      .collection("usuario")
      .find()
      .toArray((err, results) => {
        if (err) return console.log(err);
        response.render("show.ejs", { data: results });
      });
  }

  getEdit(request, response) {
    let id = request.params.id;

    global["collection"] = global.db
      .collection("usuario")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return res.send(err);
        response.render("edit.ejs", { data: result });
      });
  }

  postEdit(request, response) {
    let id = request.params.id;
    let name = request.body.name;
    let surname = request.body.surname;

    db.collection("usuario").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname,
        },
      },
      (err, result) => {
        if (err) return response.send(err);
        response.redirect("/show");
        console.log("Atualizado no Banco de Dados");
      }
    );
  }

  delete(request, response) {
    let id = request.params.id;

    global["collection"] = global.db
      .collection("usuario")
      .deleteOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) return res.send(500, err);
        console.log("Deletado do Banco de Dados!");
        response.redirect("/show");
      });
  }
}

module.exports = UsersController;
