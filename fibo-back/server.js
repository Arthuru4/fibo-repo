const express = require("express");
const router = express.Router();
const BodyParser = require("body-parser");
const mysql = require("./db.js");
const cors = require("cors");
const fibonacci = require("fibonacci");

router.post("/setdata", (req, res) => {
  const body = req.body;
  console.log(`try to set data: ${JSON.stringify(body)}`);

  const data = {
    address: body.address,
    input: body.input,
    fibo: "" + fibonacci.iterate(body.input).number
  };

  const sql = `INSERT INTO fibos (address, input, fibo) VALUES ?`;
  const values = [[data.address || null, data.input, data.fibo]];

  mysql.query(sql, [values], function(err) {
    fibonacci.kill();
    if (err) throw err;

    console.log("1 record inserted");
    res.json({
      status: "success",
      fibo: data.fibo
    });
  });
});

router.post("/getdata", (req, res) => {
  console.log(`try to get data`);
  const address = req.body.address;

  mysql.query(`SELECT * FROM fibos WHERE address=?`, [address], function(
    err,
    result
  ) {
    if (err) throw err;
    console.log(`get data success`);

    res.json({
      status: "success",
      result
    });
  });
});

const app = express();
app.use(cors());
// app.all('/*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'localhost:3306');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   next();
// });
app.use(express.json());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(3002, function() {
  console.log("server listening on port 3002!");
});
