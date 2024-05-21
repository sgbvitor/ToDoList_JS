const mysql2 = require("mysql2/promise");

const connection = mysql2.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MSQL_USER,
  password: process.env.MSQL_PASSWORD,
  database: process.env.MSQL_DB,
});
module.exports = connection;
