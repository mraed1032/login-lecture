const express = require("express");
const app = express();

const home = require("./routes/home")

//앱 세팅

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들웨어를 등록해주는 매서드

module.exports = app;