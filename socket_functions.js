
const { addUser, removeUser, getUser, getUsersInRoom, getRole } = require('./users');

module.exports = (socket) => {

    socket.on('join', ({name, room, role}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room, role});
        if(error) return callback(error);

        socket.join(user.room);
        

    })
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data))
    
}