import $ from 'jquery';
import _ from 'underscore';

let Weapon = function (name) {
  this.damage = _.random(10, 60);
  this.name = name;
};

export default Weapon;