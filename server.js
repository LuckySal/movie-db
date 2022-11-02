require('dotenv').config();

const express = require("express");
const sql = require("mysql2");

var connection = sql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : process.env.PASSWORD,
    database : 'movies_db'
});

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/movies", (request, response) => {
    response.send("A list of movies");
    console.log(`${request.method} request recieved with ${request.body}`);
});

app.post("/api/add-movie", (request, response) => {
    response.send("Movie added");
    console.log(`${request.method} request recieved with ${request.body}`);
});

app.put("/api/update-review", (request, response) => {
    response.send("Updated review");
    console.log(`${request.method} request recieved with ${request.body}`);
});

app.delete("/api/movie/:id", (request, response) => {
    response.send("Movie deleted");
    console.log(`${request.method} request recieved with ${request.body}`);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});