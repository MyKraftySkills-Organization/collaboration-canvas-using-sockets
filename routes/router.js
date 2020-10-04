const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

  router.get('/join', (req, res) => {
    res.render('join');
  })

  router.get('/', (req,res) => {
    res.render('create', {room: `${uuidv4()}`});
  })

  router.post('/room', (req, res) => {
    var name = req.body.name;
    var room = req.body.room;
    var role = "admin";
    console.log(name + " " + room + " " + role);
    res.render('board', {name, room, role});
  })

  router.get('/board', (req, res) => {
    res.render('board');
  })

module.exports = router;