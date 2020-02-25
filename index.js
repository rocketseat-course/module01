const express = require('express');

const server = express();

// Query params = ?test=1
// Route params = /test/1
// Request body = { "name": "Vinicius", "locale": "pt_BR" }

const users = ['Carlos', 'Vinicius', 'Serpa', 'Mestre'];

server.get('/test', (req, res) => {
    // return res.send('Hello World!');
    const name = req.query.name === undefined ? "World" : req.query.name;
    return res.json({ message: `Hello ${name}` });
});

server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    if (users[index] === undefined) {
        return res.status(404).json({ message: "User not foud" });
    }

    return res.json(users[index]);
});

server.listen(3000);