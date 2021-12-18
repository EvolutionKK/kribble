const express = require("express")
const http = require("http")
const axios = require("axios")
const mongoose = require("mongoose")
const socket = require("socket.io")
const app = express();

const port = process.env.PORT || 3001;
var server = http.createServer(app);
var io = socket(server)
app.use(express.json());
const DB = 'mongodb+srv://karan:karan8278@cluster0.t4q3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=> {
    console.log("Connection Successful!")
}).catch((e)=>{
    console.log(e)
})

server.listen(port, "0.0.0.0", ()=>{
    console.log("server running on  port" + port)
})