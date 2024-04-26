const express = require('express');
const http = require('http');
const connectToDatabase = require("./mongodb/connect");
const {initializeSocket} = require("./socketio/default");
const app = express();
const server = http.createServer(app);
const cors = require('cors')

initializeSocket(server); // Инициализация сокета на сервере

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
}))

// Роуты
app.use(require('./routes/post'));

connectToDatabase()
    .then(() => {
        app.listen(8000)
        console.log('Server started on port 8000')

        server.listen(8001, () => {
            console.log(`Websocket server running on port 8001`);
        });
    })