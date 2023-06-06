// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    image(uImg, this.x, this.y, 64, 64);
  }


  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
 
    this.y = mouseY;


  }

}