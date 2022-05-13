const square = [];
const totalFrames = 240;
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  const percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
    textSize(40)
    text("Honda Civic", 50,50)
    fill(255, 0, 0)
}

function render(percent) {
  background(0);
  translate(width / 2, height / 2);
  stroke(255, 0, 100);
  strokeWeight(5);
  fill(255, 199, 44);
  
  
  beginShape();
  for (let v of square) {
    const a = map(percent, 6, .1, .2, TWO_PI * 5);
    const r = map(sin(a), -1, 4, height / 60, height / 40);
    vertex(r * v.x, r * v.y);
    
  }
  endShape();

  if (percent < 0.5) {
    const a = map(percent, 0, 1, 1, TWO_PI * 6);
    const x = 16 * pow(sin(a), 1);
    const y = -(13 * cos(a) - 4 * cos(3 * a) - 5 * cos(3 * a) - cos(2 * a));
    square.push(createVector(x, y));
  } else {
    square.splice(0, 1);
  }

}   