import Caesar from './caesars';
import Challenger from './challenger';
import Weapon from './weapons';

(function() {
  'use strict';

// Caesars
  describe('About My Caesars', function() {

    beforeEach( function() {
      window.x = new Caesar();
    });

    describe('creating a Caesar', function() {
      it('should create an instance of Caesar', function () {
        expect(x instanceof Caesar).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have health of 100 upon creation unless specified in instance', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      })
    });

  });

// Challengers
  describe('About My Challengers', function() {

    beforeEach( function() {
      window.x = new Challenger();
    });

    describe('creating a Challenger', function() {
      it('should create an instance of Challenger', function () {
        expect(x instanceof Challenger).to.equal(true);
      });
    });

    describe('Challenger health', function() {
      it('should have full health upon creation unless specified in instance', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('Challenger taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      })
    });

  });

// Weapons
  describe('About My Weapons', function() {

    beforeEach( function() {
      window.x = new Weapon();
    });

    describe('creating a Weapon', function() {
      it('should create an instance of Weapon', function () {
        expect(x instanceof Weapon).to.equal(true);
      });
    });

    describe('Weapon damage', function() {
      it('should have random damage between 10 and 60', function() {
        expect(x.damage).to.be.below(61);
        expect(x.damage).to.be.above(9);
      });
    });

  });

}());