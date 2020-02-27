const express = require('express');

const server = express();
server.use(express.json());

// Query params = ?test=1
// Route params = /test/1
// Request body = { "name": "Vinicius", "locale": "pt_BR" }

const users = ['Carlos', 'Vinicius', 'Serpa', 'Mestre'];

server.get('/test', (req, res) => {
    // return res.send('Hello World!');
    const name = req.query.name === undefined ? "World" : req.query.name;
    return res.json({ message: `Hello ${name}` });
});

server.get('/users', (req, res) => {
    res.json(users);
})

server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    if (users[index] === undefined) {
        return res.status(404).json({ message: "User not foud" });
    }

    return res.json(users[index]);
});

server.post('/users', (req, res) => {
    const { name } = req.body;
    users.push(name);
    return res.status(201).json(users);
});

server.listen(3000);