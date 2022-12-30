import express from "express";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://postgres:postgres@postgres:5432/database')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});