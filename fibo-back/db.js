const mysql = require("mysql2");

var connection = mysql.createConnection({
  // TODO: uncomment **host: 'mysql',**  to use with docker
  host: 'mysql',
  user: "root",
  password: "1234",
  database: "mysql",
  port: 3306
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!");

  const sql1 = "DROP TABLE fibos";
  connection.query(sql1, function(err, result) {
    if (err) {
      const sql =
        "CREATE TABLE fibos (address VARCHAR(255), input VARCHAR(255), fibo TEXT, date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
      connection.query(sql, function(err, result) {
        if (err) {
          throw err;
        } else console.log("Table created");
      });
    } else {
      const sql =
        "CREATE TABLE fibos (address VARCHAR(255), input VARCHAR(255), fibo TEXT, date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
      connection.query(sql, function(err, result) {
        if (err) {
          throw err;
        } else console.log("Table created");
      });
    }
  });
});

module.exports = connection;
