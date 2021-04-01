const express = require("express");
const cards = require("./cards.json");
const users = require("./users.json");
const products = require("./products.json");

const app = express();

app.get("/cards", (req, res) => {
  res.send(cards);
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(5000, () => {
  console.log("servidor em execução");
});
