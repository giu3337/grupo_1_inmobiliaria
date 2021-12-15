const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log('Servidor en http://localhost:'+app.get('port')))
app.use(express.static(path.resolve(__dirname, '..','public')))

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,"./views",'index.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname,"./views",'login.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname,"./views",'register.html')))
app.get('/product', (req,res) => res.sendFile(path.resolve(__dirname,"./views",'product.html')))
app.get('/cart', (req,res) => res.sendFile(path.resolve(__dirname,"./views",'cart.html')))