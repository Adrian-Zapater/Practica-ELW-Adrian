const mongoose = require('mongoose');

const favoritoSchema = new mongoose.Schema({
    titol: { type: String, required: true, unique: true },
    autor: String,
    genere: [String],
    caps: Number,
    foto: String,
    sinopsis: String
});

const favoritoModel = mongoose.model('Favorito', favoritoSchema);

module.exports = { favoritoModel };