const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "smarkio",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  const sql =
    "CREATE TABLE IF NOT EXISTS Comments (" +
    "ID int NOT NULL AUTO_INCREMENT," +
    "text varchar(255) NOT NULL," +
    "PRIMARY KEY (ID)" +
    ");";

  connection.query(sql, (error, results, fields) => {
    if (error) return console.log(error);
    console.log("Ok");
  });
});

app.get("/", (req, res) => {
  let sql = "SELECT * FROM  Comments";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ result });
  });
});

app.post("/create", (req, res) => {
  let sql = "INSERT INTO Comments (text) VALUES ('Highway 37')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.json({ status: "Texto adicionado com sucesso" });
    console.log("1 record inserted");
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
