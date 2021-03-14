let wSlider, hSlider, rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(800, 800);
  textSize(15);
  noStroke();
  background(255);

  // create sliders
  wSlider = createSlider(0, 255, 50);
  wSlider.position(20, 20);
  hSlider = createSlider(0, 255, 50);
  hSlider.position(20, 50);
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 80);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 110);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 140);
}

function draw() {

  const w = wSlider.value();
  const h = hSlider.value();
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
 
  fill(r,g,b);
  ellipse(800/2,800/2, w, h);

  fill(0);
  text('width', wSlider.x * 2 + wSlider.width, 25);
  text('height', hSlider.x * 2 + hSlider.width, 55);
  text('red', rSlider.x * 2 + rSlider.width, 85);
  text('green', gSlider.x * 2 + gSlider.width, 115);
  text('blue', bSlider.x * 2 + bSlider.width, 145);
 
}