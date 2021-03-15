let wSlider, hSlider, rSlider, gSlider, bSlider, xSlider, ySlider;

function setup() {
  // create canvas
  smooth(); 
  createCanvas(800, 800);
  textSize(15);
  noStroke();
  background(255);

  // create sliders
  wSlider = createSlider(0, 255, 50);
  wSlider.position(20, 20);
  hSlider = createSlider(0, 255, 50);
  hSlider.position(20, 50);
  //rSlider = createSlider(0, 255, 0);
  //rSlider.position(20, 80);
  //gSlider = createSlider(0, 255, 0);
  //gSlider.position(20, 110);
  //bSlider = createSlider(0, 255, 0);
  // bSlider.position(20, 140);
  xSlider = createSlider(0, 800, 0);
  xSlider.position(20, 600);
  ySlider = createSlider(0, 800, 0);
  ySlider.position(20, 630);
}

function draw() {

  const w = wSlider.value();
  const h = hSlider.value();
 // const r = rSlider.value();
  //const g = gSlider.value();
  //const b = bSlider.value();
  const x = xSlider.value();
  const y = ySlider.value();
 
  r = random(0,255);
  g = random(0,255); 
  b = random(0,255);

  fill(r,g,b);
  translate(400, 400);
  stroke(255);
  strokeWeight(2);

  for (let i = 0; i < 10; i ++) {
    ellipse(x, y, w, h);
    rotate(PI/5);
  }

  translate(-400,-400);
  fill(0);
  text('width', wSlider.x * 2 + wSlider.width, 25);
  text('height', hSlider.x * 2 + hSlider.width, 55);
  //text('red', rSlider.x * 2 + rSlider.width, 85);
  //text('green', gSlider.x * 2 + gSlider.width, 115);
  //text('blue', bSlider.x * 2 + bSlider.width, 145);
  text('move x', xSlider.x * 2 + xSlider.width, 605);
  text('move y', ySlider.x * 2 + ySlider.width, 635);
}