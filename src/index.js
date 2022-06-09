const express = require("express");
let cors = require('cors');
let app = express();
const connect = require("./configs/db")

let port = process.env.PORT;

if (port === null || port === "") {
  port = 1200;
}

connect()
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
app.use(cors())

const listController = require("./controllers/list.controller")
app.use("/movies", listController)

module.exports = app