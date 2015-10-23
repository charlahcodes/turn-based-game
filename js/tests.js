import caesars from './caesars';

(function() {
  'use strict';

  describe('About My Good Guy', function() {

    beforeEach( function() {
      window.x = new GoodGuy();
    });

    describe('creating a good guy', function() {
      it('should create an instance of Good Guy', function () {
        expect(x instanceof GoodGuy).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
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

  describe('About My Bad Guy', function() {

    beforeEach( function() {
      window.x = new BadGuy();
    });

    describe('creating a bad guy', function() {
      it('should create an instance of Bad Guy', function () {
        expect(x instanceof BadGuy).to.equal(true);
      });
    });

    describe('bad guy health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('bad Guy taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      })
    });

  });

}());


// Good Guy

// Bad Guy


// Both will have attack methods
// Both will have health