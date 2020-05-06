// call express
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json")

// create a port to run the server 
const port = process.env.port || 3000;

//Allow express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create listen
app.listen(port, function() {
    console.log(`app is listening at ${port}`)
})

// serve the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
})

app.get("/", function (req, res) {
    res.sendFile(connect.static(__dirname, "./notes.html"));
})


//GET data
app.get("/api/notes", function (req, res) {
    res.json(notes);
})

// write note

app.post("/api/notes", function(req, res) {
    if(notes.length === 0) {
        req.body.id = 0;
    } else {
        req.body.id = notes[notes.length -1].id + 1;
    }
    notes.push(req.body)
    res.json(notes);
    addNote();
})

//Remove Note
app.delete("/api/notes:id", function(req, res) {
    for (var i = 0; i < notes.length; i++) {
        if(req.params.id === notes[i].id) {
            notes.splice(i, 1);
        }
    }
    res.json(notes);
    addNote();
})

//write to db file
function addNote() {
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(notesData))
}













