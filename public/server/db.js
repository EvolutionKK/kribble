const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(express.json());


const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "evolution"
});
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.post("/", (req, res) => {
    console.log("Anuj");    
    const name = req.body.username;
    console.log(name)
    db.query("Insert into joker (name) VALUES (?)",
        [name],
        (err, result) => {
            if (err) throw (err)
            console.log("User Created"); ``
            res.redirect("http://localhost:3000/play");
        });
});

app.listen(3001, () => {
    console.log("running server");
});
