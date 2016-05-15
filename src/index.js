import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './star-wars.json';

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};
