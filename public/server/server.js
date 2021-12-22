const io = require("socket.io")(http)
const app = require("express")()
const http = require("http").createServer(app)

io.on('connection', socket => {
    socket.on('message', ({name}) => {
        io.emit("message", {name})
    })
})
http.listen(4000, function(){
    console.log("listening on port 4000")
})

const name = document.getElementById('titi')

const socket = io();

