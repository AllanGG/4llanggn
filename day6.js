let img1; 
let img2;  
let img3;  
let img4;  
let img5;  
const sensibility = 30;
let voice, analyzer;

function preload() {
	img1 = loadImage("assets/aguegan.jpg");
  img2 = loadImage("assets/strokeyes.png");
  img3 = loadImage("assets/eyes.png");
  img4 = loadImage("assets/menton.png");
  img5 = loadImage("assets/black.png");
  voice = loadSound("assets/oooh.mp3");
  pixeled = loadFont('assets/pixeled.ttf');
}

function setup() {
  createCanvas(700, 700);
  img1.resize(680,700);
  img2.resize(680,700);
  img3.resize(680,700);
  img4.resize(680,700);
  img5.resize(680,700);

  analyzer = new p5.Amplitude();
  analyzer.setInput(voice);



}

function keyPressed() {
pushMatrix;
  if (keyCode === 65) {
    voice.play();
  } else{
    voice.stop();
  }
  popMatrix;
  }

function draw() {
  let rms = analyzer.getLevel();
  let pos = map(rms, 0, 1, 0, 300);
  
  image(img1, 0, 0);
  image(img3, -10 + mouseX / sensibility,-10 + mouseY / sensibility, 0, 0);
  image(img2, 0, 0);
  image(img5, 0, 0);
  image(img4, 0, -2 + pos);
  textFont(pixeled);
  textSize(width / 30);
  fill(255);
  text('Press "A"', 250, 650);
  
}

