// call express
const express = require("express");
const app = express();
const path = require("path");

// create a port to run the server 
const port = process.env.port || 3000;

// create listen
app.listen(port, function() {
    console.log(`app is listening at ${port}`)
})

// serve the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/index.js"))
})