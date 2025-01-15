const { createPuntuacio, findPuntuacioByUsername } = require('../models/mangues.repository');

async function registerPuntuacio(req, res) {
    console.log(req.body);
    console.log(req.headers);
   
    const username = req.body.username;
  
    const foundPuntuacio = await findPuntuacioByUsername(username);
    if (foundPuntuacio?.length) {
      return res.status(400).send('Puntuacio already exists');
    }
    const newPuntuacio = await createPuntuacio(req.body);
    res.json(newPuntuacio);
}
  
module.exports.registerPuntuacio = registerPuntuacio;