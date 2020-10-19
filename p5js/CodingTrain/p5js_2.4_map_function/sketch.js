
//Global variables
var red = 0;
var blue = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  red = map(mouseX, 0, 600, 0, 255); //direct mapping for red color
  blue = map(mouseX, 0, 600, 255, 0); //reverse mapping for blue color
  background(red, 0, blue);
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);

}
