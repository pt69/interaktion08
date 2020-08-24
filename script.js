var belloBild;
var belloPfad = "p5js_GL_images_bello.jpg";

function preload() {
  belloBild = loadImage(belloPfad);
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(240);
  image(belloBild, mouseX, mouseY);
}