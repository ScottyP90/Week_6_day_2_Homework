const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 15);
    dinosaur1 = new Dinosaur('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Allosaurus', 'carnivore', 39);
    dinosaur4 = new Dinosaur('Brachiosaurus', 'herbivore', 25);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur1);
    park.removeDino(dinosaur1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.bestDino();
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    const actual = park.findBySpecies('T-rex');
    assert.deepStrictEqual(actual, dinosaur1)
  });


  it('should be able to find out how many pepole visit a day', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.visitsPerDay();
    assert.strictEqual(actual, 119)
  });

  it('should be able to find out how many pepole visit in a year', function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.visitsPerYear();
    assert.strictEqual(actual, 43435)
  })

  it('should be able to find out how much money can be made in a year', function functionName() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.moneyPerYear();
    assert.strictEqual(actual, 651525)
  })

  it('should be able to remove all dinosaurs of a particular species');

});
