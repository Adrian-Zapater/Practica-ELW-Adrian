const express = require('express');
const { handleGetFavoritos, handleEsFavorito, createFavorito, deleteFavorito } = require('../controllers/favoritos.controller');

const favoritosRouter = express.Router();

favoritosRouter.get('/', handleGetFavoritos);
favoritosRouter.get('/esFavorito/:titol', handleEsFavorito);
favoritosRouter.post('/', createFavorito);
favoritosRouter.delete('/:titol', deleteFavorito);

module.exports = { favoritosRouter };