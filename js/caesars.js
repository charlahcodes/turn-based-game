
let Caesar = function (totalHealth, name) {


  this.health = totalHealth || 100;
  this.name = name;

  this.hit = function (num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};


export default Caesar;