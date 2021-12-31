const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const cors = require('cors');
const {Join, getUser, Current} = require('./func.js')
const {messageFormater} = require("./chat");
const PORT = 4000 || process.env.PORT;
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
  console.log('listening on *:4000');
})




