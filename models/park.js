const Park = function (name,ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDino = function() {
  this.dinoCollection.pop();
};

Park.prototype.bestDino = function() {
  for (const dino of this.dinoCollection)
  if (dino.guestsAttractedPerDay){
    return dino
  };
};
Park.prototype.findBySpecies = function (specie) {
  for (const dino of this.dinoCollection)
  if (dino.species === specie){
    return dino;
  }
};

Park.prototype.visitsPerDay = function() {
  let total = 0;
  for(const dino of this.dinoCollection){
    total += dino.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.visitsPerYear = function() {
  let total = 0;
  for(const dino of this.dinoCollection){
    total += dino.guestsAttractedPerDay;
  }
  let yearTotal = total * 365
  return yearTotal
}

Park.prototype.moneyPerYear = function() {
  let total = 0;
  for(const dino of this.dinoCollection){
    total += dino.guestsAttractedPerDay;
  }
  let moneyPerYear = total * 365 * park.ticketPrice
  return moneyPerYear
}

module.exports = Park;
