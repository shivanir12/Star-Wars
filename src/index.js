var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./star-wars.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};
