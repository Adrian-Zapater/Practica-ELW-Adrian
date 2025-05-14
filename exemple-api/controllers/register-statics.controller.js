const {createStatisticsValue} = require('../models/mangues.repository');

async function registerStatisticsValue(req, res) {
  console.log(req.body);
  console.log(req.headers);
 
  const newStatisticsValue = await createStatisticsValue(req.body);
  res.json(newStatisticsValue);
}

module.exports.registerStatisticsValue = registerStatisticsValue;