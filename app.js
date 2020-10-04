const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const server = http.createServer(app);
const socket = require('socket.io');
const logger = require('morgan');
const onConnection = require('./socket_functions');
const router = require('./routes/router');
const io = socket(server);
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(router);

io.on('connect', onConnection)

server.listen(process.env.PORT || 3030, (err) => {
    if(err)
    console.log('Port error')
    else 
    console.log('Port running at 3030')
})