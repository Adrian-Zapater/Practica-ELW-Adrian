const { findRankingPuntuacio } = require('../models/mangues.repository');

async function getRankingPuntuacio(req, res) {
    console.log(req.params);
    console.log(req.headers);
    const numero = req.params.num;
    const puntuacio = await findRankingPuntuacio(numero);
    if (!puntuacio || puntuacio.length === 0) {
      return res.status(400).send('No existeix cap puntuacio');
    }
    res.json(puntuacio);
  }

module.exports.getRankingPuntuacio = getRankingPuntuacio;