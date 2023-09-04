const mysql = require("mysql2");
// require("dotenv").config()

const db = mysql.createConnection({
  host: "localhost:3600",
  user: "root",
  password: "aman",
  database: "blogcuvette",
});

module.exports = db;
