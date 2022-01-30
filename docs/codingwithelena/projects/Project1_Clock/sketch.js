
function setup() {
  createCanvas(400, 400);
  
  textSize(45);
  textFont('Courier New');
  textStyle(BOLDITALIC); 
}

function draw() {
  background(221, 240, 221); //RGB
    stroke(0);

  //clock frame
  strokeWeight(3);
  fill(178, 211, 237); //light blue outer circle
  circle(200,200,390);
  
  strokeWeight(1);  
  fill(240, 242, 242); //light grey inner circle
  circle(200,200,330);
  
  //clock hour numbers
  fill(0);

  //Temp lines to align numbers  
/*
  line(200, 0, 200, 400); //90 degrees
  line(0, 200, 400, 200); //90 degrees  
  
  //tg(A) = a/b; tg(30°) = 1/(3^1/2)
  //b (radius) = 200 pixels => a = 116 pixels
  line(400, 84, 0, 316); //30 degrees
  line(316, 0, 84, 400); //30 degrees
  line(84, 0, 316, 400); //30 degrees 
  line(0, 84, 400, 316); //30 degrees    
//*/
  
  noStroke();
  text("1", 253, 90);
  text("2", 305, 138);
  text("3", 330, 215);
  text("4", 307, 288);  
  text("5", 253, 342);   
  text("6", 180, 360);
  text("7", 110, 341);
  text("8", 56, 288);    
  text("9", 35, 215);
  text("10", 51, 148);
  text("11", 95, 95);  
  text("12", 170, 75);  
  
 //long arrow 
  stroke(0);
  strokeWeight(1); 
  fill(217, 255, 46);
  quad(195, 200, 197, 90, 203, 90, 205, 200); //to fill this shape inside
  triangle(193, 90, 200, 80, 207, 90);

 //short arrow  
  quad(205, 195, 270, 236, 265, 243, 197, 207);
  triangle(275, 229, 280, 247, 260, 251);
  
  // middle arrow pin
  circle(200, 200, 20);
  
}