const express = require("express");
const app = express();

//importa o router
const router = require("./router");
app.use(router);

module.exports = app;
