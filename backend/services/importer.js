const bggClient = require('../helpers/bggClient');
const Listing = require('../models/listing');
const converter = require('csvtojson');
const fs = require('fs');

/**
 * 
 * @param {string} userId 
 * @returns [object] An array of boardgames in the users collection
 */
const importCollection = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await bggClient.exportCSV(userId);
            let rawGameList = await converter().fromString(response.data);
            let cleanGameList = [];
            for (let i = 0; i < rawGameList.length; i++) {
                let thisGame = rawGameList[i];
                let cleanGame = new Listing({
                    title: thisGame?.originalname,
                    refId: thisGame?.objectid,
                    release: thisGame?.yearpublished,
                    rating: thisGame?.rating,
                    max: {
                        playerCount: thisGame?.maxplayers,
                        playTime: thisGame?.maxplaytime
                    },
                    min: {
                        playerCount: thisGame?.minplayers,
                        playTime: thisGame?.minplaytime
                    },
                    qualities: {
                        complexity: thisGame.avgweight
                    }
                })
                cleanGameList.push(cleanGame);

            }
            // Process the list to compare against our main boardgame list and add any that we don't have 

            await hydrateMasterGameList(cleanGameList);
            // TODO: Need to get the user id so that we can add the games to their collection 
            resolve(jsonObj);
        } catch (error) {
            reject(error);
        }
    })

}


hydrateMasterGameList = (gameList) => {
    return new Promise(async (resolve, reject) => {

        for (let i = 0; i < 1; i++) {
            // Note - the refid is a unique key.
            // if the game already exists, we throw an error and move on
            try {
                console.log(`Evaluating (${gameList[i].refId}): ${gameList[i].title}`)
                let listing = new Listing(gameList[i])
                await listing.save();
                console.log(`Added (${gameList[i].refId}): ${gameList[i].title}`)
            } catch (err) {
                console.log(err)
            }
        }
        resolve();
    })
}

searchTitles = (title) => {
    return new Promise(async (resolve, reject) => {
        try {
            let results = await bggClient.searchTitles(title);
            resolve(results);
        } catch (error) {
            reject(error)
        }
    })
}

importGame = (refid) => { 
    return new Promise(async (resolve, reject) => {
        try {
            let result = await bggClient.getGameById(refid);
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    importCollection,
    searchTitles,
    importGame
}