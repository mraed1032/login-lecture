const express = require("express");
const app = express();

const home = require("./src/routes/home")

//앱 세팅

app.set("views", "./src/views");
app.set("view engine", "ejs");
console.log(express.static(`${__dirname}/src/public`))
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //use -> 미들웨어를 등록해주는 매서드


module.exports = app;