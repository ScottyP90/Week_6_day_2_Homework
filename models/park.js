const Park = function (name,ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dino_collection = []
}

Park.prototype.addDino = function (dinosaur) {
  this.dino_collection.push(dinosaur)
};

Park.prototype.removeDino = function() {
  this.dino_collection.pop()
};

Park.prototype.bestDino = function(dino) {
  this.dino_collection.max(dino)
};

module.exports = Park;
