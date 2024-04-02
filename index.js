const express = require('express');
const fs=require('fs');
const rawData = fs.readFileSync('message.json');
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
const cors = require('cors');

const messageData=JSON.parse(rawData)

app.use(cors());
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});


app.get('/api', (req, res) => {
  res.json(messageData);
});
let users=[];

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    messageData['messages'].push(data)
    const stringData = JSON.stringify(messageData, null, 2)

    fs.writeFile("message.json",stringData,()=>{
      console.error("err")
    })
    socketIO.emit('messageResponse', messageData);
  });
  
  socket.on('newUser',(data)=>{
    users.push(data)
    socketIO.emit('newUserResponse',users)
  })

  socket.on('typing',(data)=>{socket.broadcast.emit('typingResponse',data)})
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    users = users.filter((user) => user.socketID !== socket.id);
   
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});