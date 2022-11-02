require('dotenv').config();
console.log(process.env);

const express = require("express");
const sql = require("mysql2");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.PASSWORD,
    database : 'movies_db'
});

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})