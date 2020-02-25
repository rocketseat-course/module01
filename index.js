const express = require('express');

const server = express();

// Query params = ?test=1
// Route params = /test/1
// Request body = { "name": "Vinicius", "locale": "pt_BR" }

server.get('/test', (req, res) => {
    // return res.send('Hello World!');
    const name = req.query.name === undefined ? "World" : req.query.name;
    return res.json({ message: `Hello ${name}` });
});

server.get('/users/:id', (req, res) => {
    const { id } = req.params;
    return res.json({ message: `Searching for user ${id}` });
});

server.listen(3000);