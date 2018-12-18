const Park = function (name,ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinoCollection.push(dinosaur)
};

Park.prototype.removeDino = function() {
  this.dinoCollection.pop()
};

Park.prototype.bestDino = function(dino) {
  this.dinoCollection.max(dino)
};

module.exports = Park;
