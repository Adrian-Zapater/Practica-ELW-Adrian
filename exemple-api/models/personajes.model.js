const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    nom: { type: String, required: true, unique: true },
    autor: String,
    foto: String,
    comics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comic' }]
});

const personajeModel = mongoose.model('Personaje', personajeSchema);

module.exports = { personajeModel };