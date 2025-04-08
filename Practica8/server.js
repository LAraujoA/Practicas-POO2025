const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoute = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

//conexion a mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log(`Conectado a mongoDB`)})
.catch((err) =>{console.log(`Error en la conexion a MONGO DB`, err)});

//Ruta
app.use('/api/tareas', taskRoute);

//Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Servidor corriendo en el ${PORT}`)});