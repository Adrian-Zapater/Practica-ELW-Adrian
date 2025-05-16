const { favoritoModel } = require('../models/favoritos.model');

async function handleGetFavoritos(req, res) {
    const favoritos = await favoritoModel.find({});
    res.json(favoritos);
}

async function handleEsFavorito(req, res) {
    const titol = req.params.titol;
    const found = await favoritoModel.findOne({ titol });
    res.json({ esFavorito: !!found });
}

async function createFavorito(req, res) {
    try {
        const { titol, autor, genere, caps, foto, sinopsis } = req.body;

        const existing = await favoritoModel.findOne({ titol });
        if (existing) {
            return res.status(409).send('Ya es favorito');
        }

        const nuevoFavorito = new favoritoModel({ titol, autor, genere, caps, foto, sinopsis });
        await nuevoFavorito.save();

        res.status(201).json(nuevoFavorito);
    } catch (error) {
        res.status(500).send('Server error');
    }
}

async function deleteFavorito(req, res) {
    const titol = req.params.titol;
    await favoritoModel.deleteOne({ titol });
    res.json({ message: 'Eliminado de favoritos' });
}

module.exports = {
    handleGetFavoritos,
    handleEsFavorito,
    createFavorito,
    deleteFavorito
};