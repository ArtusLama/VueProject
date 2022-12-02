const express = require('express');



const app = express();
const port = 3000;


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

app.get("/", (req, res) => {
    res.send("Welcome to the Backend!");
});

app.get("/ping", (req, res) => {
    res.send("Hello World, from express");
});
