require('dotenv').config();
console.log(process.env);

const express = require("express");
const sql = require("mysql2");

const app = express();