
//Global variables
var r = 218;
var g = 160;
var b = 221;

var x1 = 100;
var car = {type:"Fiat", model:"500", color:"white"};

// define JavaScript object(s)
let circle1 = {
    x: 70,
    y: 200,
    diameter: 50
};

// define JavaScript object(s)
let circle2 = {
    x: 170,
    y: 300,
    diameter: 70
};


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r, g, b);
  fill(250, 200, 200)

  //standars varable usage with no object
  ellipse(x1, 100, 80, 80); // circle (no object)
  x1 += 1;

  //Using the defined "circle(s)" object
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  circle1.x = circle1.x + 1;

  fill(255, 255, 0);
  circle(circle2.x, circle2.y, circle2.diameter);

  //print(car.type); //pirt to console (F12)

}
