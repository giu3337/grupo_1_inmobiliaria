/**
 * 
 */
const express = require('express');
const path = require('path');

const app = express();

/**
 * 
 */
app.listen(3000, () => console.log('Servidor corriendo.'));

/**
 * 
 */
app.get('/', (req, res) => res.sendFile( path.resolve(__dirname, './views/index.html') ) );
app.get('/Renta', (req, res) => res.send('Renta') );
app.get('/Venta', (req, res) => res.send('Venta') );
app.get('/Contacto', (req, res) => res.send('Contacto') );
app.get('/404', (req, res) => res.send('"Error página no encontrada"') );

