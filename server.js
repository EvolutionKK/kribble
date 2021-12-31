const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
const path = require("path")
const {Join, getUser, Current} = require('./utild/func');
const {messageFormater} = require("./utild/chat");
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"kribble",'build')));
let word = '';

io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('user', (abc) => {
    const users = Join(socket.id, abc)
    io.emit('user',(
      getUser()
    ))
  })

  socket.on('chat', (guess) => {
    const user = Current(socket.id);
    const k = user.username
    io.emit('chat', (
      messageFormater({k,guess})
    ))
  })

  socket.on('word', (randWord)=>{
    word = randWord
    io.emit('word', (
      word
    ))
  })
  socket.on('drawing', (data) => io.emit('drawing', data))
})

app.use(cors())

http.listen(PORT, function(){
  console.log(`listening on *${PORT}`);
})




