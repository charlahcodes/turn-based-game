
let Caesar = function (totalHealth) {


  this.health = totalHealth;

  this.hit = function (num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};


export default Caesar;