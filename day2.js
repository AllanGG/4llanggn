function setup() {
  createCanvas(400, 400);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}