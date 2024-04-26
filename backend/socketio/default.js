const { Server } = require("socket.io");

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        }
    }); // Инициализация Socket.io

    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        // Отключение сокета
        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
}

// Экспортируем функцию для инициализации сокета
module.exports = {
    initializeSocket,
    getIO: () => io,
};