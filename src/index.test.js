var expect = require('chai').expect;
var starWars = require('./index');

describe('star-wars', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(starWars.all).to.satisfy(arrayOfStrings);
            function arrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should include starWar name "a" ', function() {
            expect(starWars.all).to.include("a");
        });
    });

    describe('random', function() {
        it('should get random starwar name', function() {
            var starWar = starWars.random();
            expect(starWars.all).to.include(starWar);
        });
    });
});