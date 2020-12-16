const express = require("express");

const routes = express.Router();
const UsersController = require("./controllers/users");

const userController = new UsersController();

// Rota inicial, irá renderizar o index.ejs
// Irá pegar os dados do banco
routes.get("/", userController.index);

routes.post("/show", userController.create);

routes.get("/show", userController.show);

routes
  .route("/edit/:id")
  .get(userController.getEdit)
  .post(userController.postEdit);

routes.route("/delete/:id").get(userController.delete);

module.exports = routes;
