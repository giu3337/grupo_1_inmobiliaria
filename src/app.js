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

app.get('/Renta', (req, res) => res.sendFile(path.resolve(__dirname, './views/renta.html') ) );
app.get('/Venta', (req, res) => res.sendFile(path.resolve(__dirname, './views/venta.html') ) );
app.get('/Contacto', (req, res) => res.sendFile(path.resolve(__dirname, './views/contacto.html') ) );
app.get('/404', (req, res) => res.sendFile(path.resolve(__dirname, './views/404.html') ) );
