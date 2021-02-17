const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Introduzca un nombre para la nota/tarea'],
        unique: true,
        maxlength: [40, 'El nombre de la tarea no puede ser mayor de 40 caracteres']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'La descripcion no puede ser mayor de 200 caracteres']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);