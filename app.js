/**
 * 
 */
const express = require('express');
const app = express();

/**
 * 
 */
app.listen(3000, () => console.log('Servidor corriendo.'));

/**
 * 
 */
app.get('/', (req, res) => res.send('Raiz') );
app.get('/Inicio', (req, res) => res.send('Inicio') );
app.get('/Renta', (req, res) => res.send('Renta') );
app.get('/Venta', (req, res) => res.send('Venta') );
app.get('/Contacto', (req, res) => res.send('Contacto') );