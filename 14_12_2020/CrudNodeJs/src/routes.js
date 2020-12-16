const express = require("express");

const routes = express.Router();
const UsersController = require("./controllers/users");
const ProductController = require("./controllers/product");



// Rota de usuário
routes.get("/", UsersController.index);

routes.post("/show", UsersController.create);

routes.get("/show", UsersController.show);

routes
  .route("/edit/:id")
  .get(UsersController.getEdit)
  .post(UsersController.postEdit);

routes.route("/delete/:id").get(UsersController.delete);

// Rota de produtos

routes.get("/product", ProductController.index);

routes.post("/product/show", ProductController.create);

routes.get("/product/show", ProductController.show);

routes
  .route("/product/edit/:id")
  .get(ProductController.getEdit)
  .post(ProductController.postEdit);

routes.route("/product/delete/:id").get(ProductController.delete);

module.exports = routes;
