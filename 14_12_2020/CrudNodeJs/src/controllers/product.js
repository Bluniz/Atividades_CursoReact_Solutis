const ObjectId = require("mongodb").ObjectID;

module.exports = {
  index(request, response) {
    response.render("./product/index.ejs");
    global.db.collection("produto").find();
  },

  create(request, response) {
    //* criar ou utilizar a coleção produto, que irá armazenar nossos dados
    global.db.collection("produto").save(request.body, (err, result) => {
      if (err) return console.log(err);

      console.log("Salvo no Banco de Dados");
      response.redirect("/product/show");
    });
  },

  show(request, response) {
    global.db
      .collection("produto")
      .find()
      .toArray((err, results) => {
        if (err) return console.log(err);
        response.render("./product/show.ejs", { data: results });
      });
  },

  getEdit(request, response) {
    let id = request.params.id;

    global.db
      .collection("produto")
      .find(ObjectId(id))
      .toArray((err, result) => {
        if (err) return response.send(err);
        response.render("./product/edit.ejs", { data: result });
      });
  },

  postEdit(request, response) {
    let id = request.params.id;
    let name = request.body.name;
    let price = request.body.price;

    global.db.collection("produto").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          price: price,
        },
      },
      (err, result) => {
        if (err) return response.send(err);
        response.redirect("/product/show");
        console.log("Atualizado no Banco de Dados");
      }
    );
  },

  delete(request, response) {
    let id = request.params.id;

    global.db
      .collection("produto")
      .deleteOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) return response.send(500, err);
        console.log("Deletado do Banco de Dados!");
        response.redirect("/product/show");
      });
  },
};
