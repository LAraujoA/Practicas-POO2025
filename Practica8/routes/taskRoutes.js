const express = require('express');
const task = require('../models/task');
const router = express.Router();

//Obtener todas las tareas
router.get("/", async(req, res) => {
    try{
        const tareas = await Task.find();
        res.json(tareas);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
});

//Crear una nueva tarea
router.post("/", async(req, res)=>{
    try{
        const tarea = new Task(req.body);
        await tarea.saver();
        res.status(201).json(tarea);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});