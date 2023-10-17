const express = require('express');
const router = express.Router();

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat messages
    socket.on('chat message', (msg) => {
      // Broadcast the message to all connected clients
      io.emit('chat message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  return router;
};