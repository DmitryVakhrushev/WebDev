let canvasWidth = 400;
let canvasHeight = 400;
let buttonsAmount = 10;
let toolbarBlockWidth = canvasWidth/buttonsAmount;
let toolbarColor = 100;
let canvasColor = 230;
let selectedColor = canvasColor;

let dividerX1 = canvasWidth/buttonsAmount; //40
let dividerY1 = 0;
let dividerX2 = canvasWidth/buttonsAmount; //40
let dividerY2 = canvasWidth/buttonsAmount; //40

let colorButton1 = 'rgb(255, 0, 0)'; //Red
let colorButton2 = 'rgb(0, 255, 0)'; //Green
let colorButton3 = 'rgb(0, 0, 255)'; //Blue
let colorButton4 = 'rgb(0, 0, 255)'; //Erase

let brushThickness = 10;
let selectedBrushThickness = brushThickness;

function setup() {
  
  createCanvas(canvasWidth, canvasHeight);
  background(canvasColor);//moved to setup (not to overwrite drawings)
  
  //toolbar panel
  fill(toolbarColor);
  rect(0, 0, width, width/buttonsAmount);
  
 
  //toolbar divider lines
  stroke(255);
  while (dividerX1 < width)
  {
    line(dividerX1, dividerY1, dividerX2, dividerY2);
    dividerX1 = dividerX1 + width/buttonsAmount;
    dividerX2 = dividerX2 + width/buttonsAmount;
  }
  
  //Thickness selectors
  fill(255);
  circle(toolbarBlockWidth/2, toolbarBlockWidth/2, 15);
  circle(toolbarBlockWidth/2 + toolbarBlockWidth, toolbarBlockWidth/2, 20);
  circle(toolbarBlockWidth/2 + toolbarBlockWidth*2, toolbarBlockWidth/2, 25);

  //Color selectors
  stroke(colorButton1); //Red color selector
  fill(colorButton1);
  rect(120, 0, 39, 40);
  
  stroke(colorButton2); //Green color selector
  fill(colorButton2);
  rect(161, 0, 39, 40);  
  
  stroke(colorButton3); //Blue color selector
  fill(colorButton3);
  rect(201, 0, 39, 40);    
  
  stroke(canvasColor - 200); //Erase color (canvas)
  fill(canvasColor);//RGB
  rect(320, 0, 40, 40);
  fill(0, 102, 153);
  text('Erase',325,24);
}

function draw() 
{
  
  // Check selection
  if(mouseIsPressed && mouseY > 0 && mouseY < 40)
  {
    if(mouseX > 120 && mouseX < 160)
    {
      selectedColor = colorButton1;
    }
    else if (mouseX > 160 && mouseX < 200)
    {
          selectedColor = colorButton2;
    }
    
    else if (mouseX > 200 && mouseX < 240)
    {
      selectedColor = colorButton3;
    }    
    
    else if (mouseX > 320 && mouseX < 360)
    {
      selectedColor = canvasColor;
    }    

    // Brush thickness
    else if (mouseX > 0 && mouseX < 40)
    {
      selectedBrushThickness = brushThickness + 0; //10
    }       
    
    else if (mouseX > 40 && mouseX < 80)
    {
      selectedBrushThickness = brushThickness + 10;
    }        
    
   else if (mouseX > 80 && mouseX < 120)
    {
      selectedBrushThickness = brushThickness + 20;
    }      
    
  }
    
  //Draw a shape with selected color
  if(mouseIsPressed && mouseY > 40 + selectedBrushThickness/2)
  {
    noStroke(); //remove the shape's border
    fill(selectedColor);
    circle(mouseX, mouseY, selectedBrushThickness);
  }
}
