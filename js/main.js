import $ from 'jquery';
import _ from 'underscore';

import Caesar from './caesars';
import Challenger from './challenger';

// Caesar Instances
let ourHero = new Caesar(0);



// Bad Guy Instance
let badguy;

let commonCold = new Challenger(100, 'The Common Cold');
let boredom = new Challenger(150, 'Boredom');
let death = new Challenger(200, 'Death');

let chooseBadGuy = _.random(0, 100);

if (chooseBadGuy < 34) {
  badguy = commonCold;
  $('.challenger').css('background', 'url(./images/cold.jpg)')
} else if ((chooseBadGuy > 34) && (chooseBadGuy < 67)) {
  badguy = boredom;
  $('.challenger').css('background', 'url(./images/boredom.jpg)')
} else {
  badguy = death;
  $('.challenger').css('background', 'url(./images/death.jpg)')
};

// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');
let ggAttack = $('.ggAttack');
let fightMessage = $('.fightMessage');

// Show current (default) health
ggHealth.text(ourHero.health);
bgHealth.text(badguy.health);

// On click, choose correct player and hide choices/show fight screen
$(".choice1").click(function(){
  ourHero.health = 100;
  ggHealth.text(ourHero.health);
  $('.choose').css('display', 'none');
  $('.logo').css('display', 'none');
  $('.fight').css('display', 'inline');
  $(document.body).css('background', 'url(./images/julius.jpg)');
  $(document.body).css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/julius_head.jpg)')
});

$(".choice2").click(function(){
  ourHero.health = 150;
  ggHealth.text(ourHero.health);
  $('.choose').css('display', 'none');
  $('.logo').css('display', 'none');
  $('.fight').css('display', 'inline');
  $(document.body).css('background', 'url(./images/little.jpg)');
  $(document.body).css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/lc_head.jpg)')
});

$(".choice3").click(function(){
  ourHero.health = 200;
  ggHealth.text(ourHero.health);
  $('.choose').css('display', 'none');
  $('.logo').css('display', 'none');
  $('.fight').css('display', 'inline');
  $(document.body).css('background', 'url(./images/salad.jpg)');
  $(document.body).css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/salad_head.jpg)')
});

// Setting up ON Events
ggAttack.on('click', function () {

  // Generate a random amount of hit points
  // Then attack!!!
  let num = _.random(0, 25);
  let num2 = _.random(0, 25);
  badguy.hit(num);

  if (badguy.health <= 0) {
    bgHealth.text('Defeated');
    $('.fight').css('display', 'none');
    $(document.body).css('background-image', 'url(./images/hail.png');
    $(document.body).css('background-size', 'cover');
    $(document.body).css('background-color', 'black');
    $(document.body).css('background-repeat', 'no-repeat');

  } else {
    bgHealth.text(badguy.health);
    fightMessage.text('Bowser Fights Back!!!');
    ourHero.hit(num2);
    ggHealth.css('color', 'red');
    ggHealth.text(ourHero.health);
    setTimeout( function () {
      ggHealth.css('color', 'black');
    }, 1000);
  }

});











