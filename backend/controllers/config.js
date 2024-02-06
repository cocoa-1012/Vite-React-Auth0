const service = require('../services/config');

const getConfig = async (req, res) => {
  try {
    const returnVal = await service.getConfig(req.headers);
    res.status(200).send({
      data: returnVal
    });
  } catch (error) {
    res.status(400).send({
      error: "error: unable to get total score averages for accounts"
    });
  }
}

module.exports = {
  getConfig
};
