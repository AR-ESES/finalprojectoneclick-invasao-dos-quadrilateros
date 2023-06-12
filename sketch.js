// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var pipes = [];
let bImg;
let uImg;
let qImg;
let vImg;


function preload () {
  bImg = loadImage('images/background.png');
  uImg = loadImage('images/nave.png');
  qImg = loadImage('images/quad.png');
  vImg = loadImage('images/cora.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(bImg);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

