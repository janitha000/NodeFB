require('dotenv').config();
const app = require('./index');
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection
    .on('connected', () => {
        console.log('Mongodb connection open')
    })
    .on('error', (err) => {
        console.log('Connection error: ' + err.message)
    })
    
require('./Models/post')
const port = process.env.PORT || 3000;

var server = app.listen(port, (err) =>{
    if(err)
        return console.log('Error', err)
    
    console.log('Server is listening at port :' + port);
})


var socketio = require('socket.io').listen(server);

socketio.on('connection', function(socket){
    console.log('New user connected');
    socketio.emit('newMessage', 'A user connected');
    socket.on('disconnect', function(){
        console.log('User disconnected');
    })

    socket.on('newMessage', function(message){
        console.log("New message: "  + message);
        socketio.emit('newMessage', message);
    })
});