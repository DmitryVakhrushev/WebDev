let canvasSize = 600;
let plateSize = 600 * 0.8;

let donutSize = 200;
let donutCount = 0;

let donutColor1 = '#79C6F7';
let donutColor2 = '#572115';
let donutColor3 = '#FA3A7B';


function setup() {
  createCanvas(canvasSize, canvasSize);
  background(240);
  
  // draw a plate
  fill(204,216,255);
  noStroke();
  circle(width/2, height/2, plateSize);
  
  fill(234,228,255);
  circle(width/2, height/2, plateSize-20);
  
  fill(221,222,255);
  circle(width/2, height/2, 200);  
  
}

function draw()
{
  //Draw donuts
  drawDonut(180,270, donutSize, donutColor1);
  drawDonut(380,200, donutSize, donutColor2);
  drawDonut(340,400, donutSize, donutColor3);
  
  //on mouse click draw a donut with randomly selected topping

}

function drawDonut(positionX, positionY, size, glaze)
{
  //donut main color
  fill(255,173,47);
  circle(positionX, positionY, size);
  
  //glaze on top
  fill(glaze);
  circle(positionX, positionY, size-20);
  
  
  //donut main color
  fill(255,173,47);
  circle(positionX, positionY, size/3+10);  
  
  // donut hole (matches the plate color)
  fill(204,216,255);
  circle(positionX, positionY, size/3);
  
}


//Changes donut's color on mouse click
function mouseClicked()
{
  donutColor1 = pickColor();
  donutColor2 = pickColor();
  donutColor3 = pickColor();
}

//Select a random donut color from the predefined list of colors
function pickColor()
{
  let colors = ['#79C6F7', '#572115', '#FA3A7B', '#59CEC2', '#F5E9DC'];
  return random(colors);  
}
  