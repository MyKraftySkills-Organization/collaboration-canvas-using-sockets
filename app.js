const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.createServer(app)
const socket = require('socket.io')
const logger = require('morgan')
const onConnection = require('./functions')
const io = socket(server)


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('board')
})

io.on('connection', onConnection)

server.listen(process.env.PORT || 3030, (err) => {
    if(err)
    console.log('Port error')
    else 
    console.log('Port running at 3030')
})