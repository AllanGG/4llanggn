let img1; 
let img3;  

function preload() {
	img1 = loadImage("assets/aguegan.jpg");
  img2 = loadImage("assets/strokeyes.png");
  img3 = loadImage("assets/eyes.png");
}

function setup() {
  createCanvas(700, 700);
  img1.resize(680,700);
  img2.resize(680,700);
  img3.resize(680,700);
}

function draw() {
  image(img1, 0, 0);
/*
  stroke(3,108,95);
  fill(124, 211, 200);
  ellipse(272 + mouseX / 50,269 + mouseY / 50,20,20);
  ellipse(378 + mouseX / 50,272 + mouseY / 50,20,20);
  
  fill(0);
  ellipse(272 + mouseX / 50,269 + mouseY / 50,8,8);
  ellipse(378 + mouseX / 50,272 + mouseY / 50,8,8);
  
  noStroke();
  fill(255);
  ellipse(276 + mouseX / 50,270 + mouseY / 50,3,3);
  ellipse(382 + mouseX / 50,273 + mouseY / 50,3,3);
*/

  image(img3, -10 + mouseX / 30,-10 + mouseY / 30,0,0);
  image(img2, 0, 0);
}