const createError = require('http-errors');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const {addUser,getUser,getUsersInRoom,removeUser}= require('./users');

io.on('connection', (socket)=> {
  console.log('we have connection');
  socket.on('join', ({name, room}, callback) => {
    const{error, user} = addUser({id: socket.id, name, room});
    if(error) return callback(error);
    socket.join(user.room);
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    console.log(name, room);
    callback()
  });

  socket.on('sendMessage', (message, callback)=>{
    const user = getUser(socket.id)
    console.log(user+'lololo')
    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', {room:user.room, users: getUsersInRoom(user.room)})
    callback();
  })
  socket.on('disconnect', ()=>{
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', {user: 'admin', text : `${user.name} has left.`})
    }
    console.log('user has left')

  })
});

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true ,
  useUnifiedTopology: true
})
    .then(()=>console.log('Connected to DB'))
    .catch(e=>console.log(e));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Open connection!")
});

const indexRouter = require('./routes/api/index');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});


server.listen(process.env.PORT || 8080, () => { console.log('Server running on port 8080'); });
