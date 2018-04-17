const express = require('express'); // import express package
const app = express(); // Create http application
const restRouter = require('./routes/rest'); // import rest router;
const mongoose = require('mongoose');
const http = require('http');
mongoose.connect('mongodb://test:test@ds147069.mlab.com:47069/problems');

const path = require('path');

// if the url matches 'api/v1', it will use restRouter to handele the traffic
app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public'))); 
// response for GET request when url matches '/'
// send 'Hello World!' to client nomatter what the request is
// app.get('/', (req, res) => res.send('Hello World!!!!'));

// launch application, listen on port 3000
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.use((req, res) => {
	res.sendFile('index.html', {root:path.join(__dirname, '../public')});
});

var socketIO = require('socket.io');
var io = socketIO();
// require('./services/editorSocketService')(io) is function call
var editorSocketService = require('./services/editorSocketService')(io);
// connect io with server
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);
// listening call back
function onListening() {
    console.log('App listening on port 3000!')
 }

