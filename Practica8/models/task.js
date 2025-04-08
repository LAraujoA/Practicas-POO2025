const mongoose = require('mongoose');

const taskShema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String},
    completada: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = new mongoose.model("Task", taskShema); 