// call express
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json")

// create a port to run the server 
const port = process.env.port || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

//API route
app.get("/api/notes", function (req, res) {
    res.json(notes);
})

