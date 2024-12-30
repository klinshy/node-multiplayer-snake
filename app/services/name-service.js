//'use strict'; //uncomment once it works

/// <reference types="@workadventure/iframe-api-typings" /> 
// David ones told me that this may help, and it did (but in a different case)

require 

/**
 * Generates names and ids, and stores them so they aren't reused
 */
class NameService {

    constructor() {
        this.usedPlayerNames = new Set();
        this.usedFoodIds = new Set();
    }

    reinitialize() {
        this.usedPlayerNames.clear();
        this.usedFoodIds.clear();
    }

    doesPlayerNameExist(name) {
        return this.usedPlayerNames.has(name);
    }

    getBotId() {
        let newBotId;
        do {
            newBotId = this._generateBotName();
        } while (this.usedPlayerNames.has(newBotId));
        this.usedPlayerNames.add(newBotId);
        return newBotId;
    }

    getFoodId() {
        let foodId;
        do {
            foodId = this._generateFoodId();
        } while (this.usedFoodIds.has(foodId));
        this.usedFoodIds.add(foodId);
        return foodId;
    }

    getPlayerName() {
        let newPlayerName;
        do {
            newPlayerName = this._generatePlayerName();
        } while (this.usedPlayerNames.has(newPlayerName));
        this.usedPlayerNames.add(newPlayerName);
        return newPlayerName;
    }

    returnFoodId(foodId) {
        this.usedFoodIds.delete(foodId);
    }

    returnPlayerName(name) {
        this.usedPlayerNames.delete(name);
    }

    usePlayerName(name) {
        this.usedPlayerNames.add(name);
    }

    _generateBotName() {
        return `Bot ${this._getRandomNumber()}${this._getRandomNumber()}${this._getRandomNumber()}`;
    }

    _generateFoodId() {
        return `Food ${this._getRandomNumber()}${this._getRandomNumber()}${this._getRandomNumber()}${this._getRandomNumber()}`;
    }

    _generatePlayerName() {
        try {
            return WA.player.name; //this should retrieve the player name from the WorkAdventure player
        } catch (error) {
            console.error('Error getting WA player name:', error);
            return `Player ${this._getRandomNumber()}${this._getRandomNumber()}${this._getRandomNumber()}`;
        }
    }

    _getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
}

module.exports = NameService;
