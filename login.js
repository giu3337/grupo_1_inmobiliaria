const path =  require ('path');
const express = require ('express');
const app = express ();
 
//definir puerto
app.set('port', 3007)
 
//definir observador del puerto
app.listen(app.get('port'), () => console.log ('Servidor Ok'))
 
//definir las rutas del servidor
 
app.get ('/',(req,res) => res.sendFile (path.resolve(__dirname,"./login.html")))

app.use (express.static(path.resolve(__dirname,"./login")))