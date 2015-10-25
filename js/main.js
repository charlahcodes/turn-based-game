import $ from 'jquery';
import _ from 'underscore';

import Caesar from './caesars';
import Challenger from './challenger';
import Weapon from './weapons';

(function() {

// Caesar Instances
let ourHero = new Caesar(0);
let julius = new Caesar(100, 'Julius Caesar');
let little = new Caesar(150, 'Little Caesar');
let salad = new Caesar(200, 'Caesar Salad');

// Challenger Instances
let badguy;

let commonCold = new Challenger(100, 'The Common Cold');
let boredom = new Challenger(150, 'Boredom');
let death = new Challenger(200, 'Death');

// Weapon instances
let sword = new Weapon('a big sword');
let science = new Weapon('science');

// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');
let swordButton = $('.sword');
let scienceButton = $('.science');
let fightMessage = $('.fightMessage');

// choose challenger
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

// On click, choose correct player and hide choices/show fight screen
$(".choice1").click(function(){
  ourHero = julius;
  ggHealth.text(ourHero.health);
  $('.background').css('background', 'url(./images/julius.jpg)');
  $('.background').css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/julius_head.jpg)');
  $('.choose').fadeOut(100);
  $('.logo').fadeOut(100, function() {
    $( '.fight' ).fadeIn(200);
    $('.background').fadeIn(200);
  });

  ggHealth.text(ourHero.health);
  bgHealth.text(badguy.health);
});

$(".choice2").click(function(){
  ourHero = little;
  ggHealth.text(ourHero.health);
  $('.background').css('background', 'url(./images/little.jpg)');
  $('.background').css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/lc_head.jpg)')
  $('.choose').fadeOut(100);
  $('.logo').fadeOut(100, function() {
    $( '.fight' ).fadeIn(200);
    $('.background').fadeIn(200);
  });
  ggHealth.text(ourHero.health);
  bgHealth.text(badguy.health);
});

$(".choice3").click(function(){
  ourHero = salad;
  ggHealth.text(ourHero.health);
  $('.background').css('background', 'url(./images/salad.jpg)');
  $('.background').css('background-size', 'cover');
  $('.ourHero').css('background', 'url(./images/salad_head.jpg)')
  $('.choose').fadeOut(100);
  $('.logo').fadeOut(100, function() {
    $( '.fight' ).fadeIn(200);
    $('.background').fadeIn(200);
  });
  ggHealth.text(ourHero.health);
  bgHealth.text(badguy.health);
});

// Show current (default) health
ggHealth.text(ourHero.health);
bgHealth.text(badguy.health);

// Setting up ON Events
swordButton.on('click', function () {

  // Generate a random amount of hit points
  // Then attack and produce outcome
  let num = sword.damage;
  let num2 = _.random(0, 40);
  badguy.hit(num);
  bgHealth.css('color', 'red');
  bgHealth.text(ourHero.health);
  setTimeout( function () {
    bgHealth.css('color', 'white');
  }, 500);

  if (badguy.health <= 0) {
    $('.fight').css('display', 'none');
    $('.background').css('display', 'none');
    $(document.body).css('background-image', 'url(./images/hail.png');
    $(document.body).css('background-size', 'cover');
    $(document.body).css('background-color', 'black');
    $(document.body).css('background-repeat', 'no-repeat');
    setTimeout( function () {
      $('.choose').fadeIn(500);
      $(document.body).css('background-image', 'none');
      window.location.reload();
    }, 1000);

  } else {
    bgHealth.text(badguy.health);
    fightMessage.text(ourHero.name + ' attacks ' + badguy.name + ' with ' + sword.name + ', causing ' + sword.damage + ' points of damage!  ' + badguy.name + ' retaliates at random, causing ' + num2 + ' points of damage.');
    ourHero.hit(num2);
    ggHealth.css('color', 'red');
    ggHealth.text(ourHero.health);
    setTimeout( function () {
      ggHealth.css('color', 'white');
    }, 500);
      if (ourHero.health <= 0) {
      fightMessage.text(ourHero.name + " has been defeated!");
      ggHealth.text('Defeated');
      setTimeout( function () {
      $('.background').css('display', 'none');
      $('.fight').css('display', 'none');
      $('.choose').fadeIn(500);
      window.location.reload();
    }, 1000);
    };
  };
});

scienceButton.on('click', function () {

  // Generate a random amount of hit points
  // Then attack and produce outcome
  let num = science.damage;
  let num2 = _.random(5, 55);
  badguy.hit(num);
  bgHealth.css('color', 'red');
  bgHealth.text(ourHero.health);
  setTimeout( function () {
    bgHealth.css('color', 'white');
  }, 500);

  if (badguy.health <= 0) {
    $('.fight').css('display', 'none');
    $('.background').css('display', 'none');
    $(document.body).css('background-image', 'url(./images/hail.png');
    $(document.body).css('background-size', 'cover');
    $(document.body).css('background-color', 'black');
    $(document.body).css('background-repeat', 'no-repeat');
    setTimeout( function () {
      $('.choose').fadeIn(500);
      $(document.body).css('background-image', 'none');
      window.location.reload();
    }, 1000);

  } else {
    bgHealth.text(badguy.health);
    fightMessage.text(ourHero.name + ' attacks ' + badguy.name + ' with ' + science.name + ', causing ' + science.damage + ' points of damage!  ' + badguy.name + ' retaliates at random, causing ' + num2 + ' points of damage.');
    ourHero.hit(num2);
    ggHealth.css('color', 'red');
    ggHealth.text(ourHero.health);
    setTimeout( function () {
      ggHealth.css('color', 'white');
    }, 500);
      if (ourHero.health <= 0) {
      fightMessage.text(ourHero.name + " has been defeated!");
      ggHealth.text('Defeated');
      setTimeout( function () {
      $('.background').css('display', 'none');
      $('.fight').css('display', 'none');
      $('.choose').fadeIn(500);
      window.location.reload();
    }, 1000);
    };
  };
});
}());











