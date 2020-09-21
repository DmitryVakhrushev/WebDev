
//Global variables
let xPosition = 100, yPosition = 100;
let xVelocity = 2, yVelocity = 1;
let size = 40;

function setup() {
  createCanvas(300, 300);
  frameRate(50);
}

function draw() {  
  background(175, 235, 250);
  
  //bouncing off left and right walls
  if(xPosition > width - size/2 || xPosition - size/2 < 0){
   xVelocity = xVelocity * (-1);
  }
  
  //bouncing off the bottom and top
  if(yPosition > height - size/2 || yPosition - size/2 < 0){
   yVelocity *= -1;
  }
  
  //for debugging
  //print("xPosition is: " + xPosition);
  //print("yPosition is: " + yPosition);
  
  fill(160, 155, 245);
  //legs
  // change the drawing based on the frame rate
  if((frameCount % 50) > 25){
    circle(xPosition - size/2, yPosition + size/4, size/2);
    circle(xPosition + size/2, yPosition + size/4, size/2);
    circle(xPosition - size/4, yPosition + size/2, size/2);
    circle(xPosition + size/4, yPosition + size/2, size/2);
    circle(xPosition, yPosition + size/2, size/2);
    }
  else{
    ellipse(xPosition - size/2, yPosition + size/2, size/2, size);
    ellipse(xPosition + size/2, yPosition + size/2, size/2, size);
    ellipse(xPosition - size/4, yPosition + size/2, size/2, size);
    ellipse(xPosition + size/4, yPosition + size/2, size/2, size);
    ellipse(xPosition, yPosition + size/2, size/2, size);
  }
    
  //body
  circle(xPosition, yPosition, size);
  //eyes
  fill(0);
  circle(xPosition - size/4, yPosition - size/8, size/4);
  circle(xPosition + size/4, yPosition - size/8, size/4);  
  
  //updating for next iteration
  xPosition += xVelocity;
  yPosition += yVelocity;
}