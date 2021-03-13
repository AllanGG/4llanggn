function setup() {

  smooth(); 

  r = random(0,255);
  g = random(0,255); 
  b = random(0,255);
  a = random(255); 

  createCanvas(800, 800);
  background(r, g, b, a);

  
}

function draw() {

  sizeshape = random(0, 100);

  r = random(0,255);
  g = random(0,255); 
  b = random(0,255);
  a = random(0,50); 

  if (mouseIsPressed) {
    fill(255);

  } else {
    fill(r, g, b);
  }
  stroke(0);
  strokeWeight(4);
  translate(400, 400);
  for (let i = 0; i < 10; i ++) {
    ellipse(mouseX, mouseY, sizeshape, 500);
    rotate(PI/5);
  }
}