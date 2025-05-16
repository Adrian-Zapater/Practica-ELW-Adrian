const express = require('express');
const { handleGetPersonajes, createPersonaje, getComicsByPersonaje } = require('../controllers/personajes.controller');

const personajesRouter = express.Router();

personajesRouter.get('/', handleGetPersonajes);
personajesRouter.post('/', createPersonaje);
personajesRouter.get('/:nom/comics', getComicsByPersonaje);

module.exports = { personajesRouter };