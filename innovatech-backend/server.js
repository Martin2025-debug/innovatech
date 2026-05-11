const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/saludo', (req, res) => {
    res.json({
        mensaje: 'Hola desde el Backend Innovatech'
    });
});

app.listen(3000, "0.0.0.0",() => {
    console.log('Servidor backend ejecutándose en puerto 3000');
});