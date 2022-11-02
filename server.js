require('dotenv').config();
console.log(process.env);

const express = require("express");
const sql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})