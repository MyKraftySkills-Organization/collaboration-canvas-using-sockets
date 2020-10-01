const express = require('express')
const io = require('socket.io')
const app = express()


app.get('/', (req, res) => {

})


app.listen(process.env.PORT || 3030, (err) => {
    if(err)
    console.log('Port error')
    else 
    console.log('Port running at 3030')
})