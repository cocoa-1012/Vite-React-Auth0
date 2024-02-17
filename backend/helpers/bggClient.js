const axios = require('axios');
const BASE_URL = 'https://boardgamegeek.com'
const client = axios.create({
    baseURL: BASE_URL
});
const util = require('../helpers/util');
const fs = require('fs')

/**
 * 
 * @param {string} userId 
 * @returns {string} A CSV payload of all games in the users profile
 */
const exportCSV = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await client.get(`/geekcollection.php?action=exportcsv&subtype=boardgame&username=${userId}&all=1`);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    })
}

const searchTitles = (title) => {
    return new Promise(async (resolve, reject) => {
        try {
            let results = [];
            let response = await client.get(`/xmlapi2/search?query=${title}&type=boardgame`);
            if (util.isValidInput(response?.data)) {
                let jsonPayload = util.convertXmlToJson(response?.data)
                let jsonObj = JSON.parse(jsonPayload);
                let items = jsonObj?.items?.item

                items.forEach(it => {
                    if (util.isValidInput(it?.name?._attributes?.value)) {
                        results.push({
                            id: it?._attributes?.id,
                            name: it?.name?._attributes?.value
                        })
                    }
                })
            }

            resolve(results);
        } catch (error) {
            reject(error)
        }
    })
}

const getGameById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await client.get(`/xmlapi2/thing?type=boardgame&stats=1&id=${id}`);
            if (util.isValidInput(response?.data)) {
                let jsonObj = JSON.parse(util.convertXmlToJson(response?.data));
                let gameDetails = jsonObj?.items?.item;

                // Convert the incoming JSON format that has a lot of extraneous information into our schema     
                let cleanGame = {
                    'title': gameDetails.name[0]._attributes.value,
                    'refId': gameDetails._attributes.id,
                    'release': parseInt(gameDetails.yearpublished._attributes.value),
                    'rating': parseFloat(parseFloat(gameDetails.statistics.ratings.average._attributes.value).toFixed(2)),
                    'max': {
                        'playerCount': parseInt(gameDetails?.maxplayers?._attributes?.value),
                        'playTime': parseInt(gameDetails.maxplaytime._attributes.value)
                    },
                    'min': {
                        'playerCount': parseInt(gameDetails.minplayers._attributes.value),
                        'playTime': parseInt(gameDetails.minplaytime._attributes.value)
                    },
                    'qualities': {
                        'complexity': parseFloat(parseFloat(gameDetails?.statistics.ratings.averageweight._attributes.value).toFixed(2))
                    }
                }

                resolve(cleanGame)
            }


        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    exportCSV,
    searchTitles,
    getGameById
}