
//EJERCICIO 1
/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo! Author: Kevin Florencia');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto http://localhost:3000');
});
*/
//EJERCICIO 2
/*
const express = require('express');
const app = express();
app.get('/hola', (req, res) => { 
 res.send('Hola Author: Kevin Florencia');
});
app.get('/mundo', (req, res) => { 
 res.send('Mundo Author: Kevin Florencia');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto http://localhost:3000');
});
*/
//EJERCICIO 3
/*
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => { 
 res.sendFile(__dirname + '/public/views/form.html');
});
app.post('/saludar', (req, res) => { 
 const { nombre } = req.body; 
 res.send(`Hola ${nombre}!`);
});
app.listen(3000, () => { 
 console.log('Servidor iniciado en http://localhost:3000');
});*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Conectado a la base de datos');
});