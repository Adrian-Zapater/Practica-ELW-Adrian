const {createStatics} = require('../models/mangues.repository');

async function registerStatics(req, res) {
  console.log(req.body);
  console.log(req.headers);
 
  const newStatics = await createStatics(req.body);
  res.json(newStatics);
}

module.exports.registerStatics = registerStatics;