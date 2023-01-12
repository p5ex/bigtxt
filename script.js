function preload() {
  font = loadFont('fonts/Inconsolata-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
}

function draw() {
  background("white");
  var name = input.value();
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont(font)
  textWrap(WORD);
  text(name, windowWidth / 2, windowHeight / 2)
  
}