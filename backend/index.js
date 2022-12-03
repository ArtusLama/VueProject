
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes/routes');



// DATABASE
const databaseLink = process.env.DATABASE;

mongoose.connect(databaseLink);
const database = mongoose.connection;


database.on("error", (error) => {
    console.log("[DATABASE] -> " + error)
})
database.once("connected", () => {
    console.log("[DATABASE] -> Connected to database!");
})






// BACKEND
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server started at port: ${port}!`))
app.use(express.json())



// BACKEND SITES
app.get("/", (req, res) => {
    res.send("Welcome to the Backend!");
});

app.use('/api', routes)