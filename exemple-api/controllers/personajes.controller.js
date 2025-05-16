const { personajeModel } = require('../models/personajes.model');

async function handleGetPersonajes(req, res) {
    const personaje = await personajeModel.find({});
    res.json(personaje);
}

async function createPersonaje(req, res) {
    try {
        const { nom, autor, foto, comics } = req.body;

        const existing = await personajeModel.findOne({ nom });
        if (existing) {
            return res.status(409).send('Ya existe un personaje con ese nombre');
        }

        const nuevoPersonaje = new personajeModel({ nom, autor, foto, comics });
        await nuevoPersonaje.save();

        res.status(201).json(nuevoPersonaje);
    } catch (error) {
        res.status(500).send('Server error');
    }
}

async function getComicsByPersonaje(req, res) {
    const nombre = req.params.nom;
    try {
        const personaje = await personajeModel.findOne({ nom: nombre });
        if (!personaje) {
            return res.status(404).send('No existeix aquest personatge');
        }
        res.json(personaje.comics);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
}

module.exports = {
    handleGetPersonajes,
    createPersonaje,
    getComicsByPersonaje
};