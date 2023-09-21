const mysql = require("mysql2");
// require("dotenv").config()

const db = mysql.createConnection({
  host: "db4free.net",
  user: "cuvette12blog",
  password: "cuvette12blog",
  database: "cuvette12blog",
});

module.exports = db;
