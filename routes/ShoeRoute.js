const {
  CreateShoe,
  ListShoe,
  ListShoeById,
  UpdateShoe,
  DeleteShoe,
} = require("../controllers/ShoeControllers");

const express = require("express");

const ShoeRouter = express();

ShoeRouter.post("/shoe", CreateShoe);
ShoeRouter.get("/shoe", ListShoe);
ShoeRouter.get("/shoe/category/:category", ListShoeById);
ShoeRouter.put("/shoe/:id", UpdateShoe);
ShoeRouter.delete("/shoe/:id", DeleteShoe);

module.exports = ShoeRouter;
