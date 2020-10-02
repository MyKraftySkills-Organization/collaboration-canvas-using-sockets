
module.exports = (socket) => {

    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data))
    
}