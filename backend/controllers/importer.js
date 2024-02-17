const service = require('../services/importer');
const util = require('../helpers/util');

const importCollection = async (req, res) => {
  try {

    const userId = req?.query?.userid;

    if (!util.isValidInput(userId)) {
      throw new Error('Invalid userid')
    }

    await service.importCollection(userId);
    res.sendStatus(200);
    return;

  } catch (error) {
    res.status(500).send({ error: `${error}` });
  }
}

const importProfile = async (req, res) => {
  res.sendStatus(200);
  return;
}

const searchTitles = async (req, res) => {
  try {
    const title = req?.query?.title;

    if (!util.isValidInput(title)) {
      throw new Error('Value for title required')
    }


    let results = await service.searchTitles(title);
    res.status(200).send({ data: results })
    return;

  } catch (error) {
    res.status(500).send({ error: `${error}` });
  }

}

const importGame = async (req, res) => { 
  try {
    const refid = req?.query?.refid;

    if (!util.isValidInput(refid)) {
      throw new Error('ID for game is required')
    }

    let gameDetails = await service.importGame(refid);
    res.status(200).send({ data: gameDetails })
    return;

  } catch (error) {
    res.status(500).send({ error: `${error}` });
  }
}
module.exports = {
  importCollection,
  importProfile,
  searchTitles,
  importGame
};

