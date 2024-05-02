let frogX, frogY, frogX2, frogY2;
let frogAngle;
let keys = {};

function setup() {
  createCanvas(800, 800);
  frogAngle = 0;
  frogX = width/2;
  frogY = height/2;
  frogX2 = 100;
  frogY2 = 0;
}

function draw() {
  if (keys['w'] || keys['W']) {
    frogY -= 10;
  }
  if (keys['s'] || keys['S']) {
    frogY += 10;
  }
  if (keys['a'] || keys['A']) {
    frogX -= 10;
  }
  if (keys['d'] || keys['D']) {
    frogX += 10;
  }
  if (keys['ArrowUp']) {
    frogY2 -= 10;
  }
  if (keys['ArrowDown']) {
    frogY2 += 10;
  }
  if (keys['ArrowLeft']) {
    frogX2 -= 10;
  }
  if (keys['ArrowRight']) {
    frogX2 += 10;
  }

  background(255);
  push();
    translate(frogX, frogY);
    rotate(radians(frogAngle));
    scale(5, 5);
    translate(-10, -7);
    drawfrog();
  pop();

  push();
    translate(frogX2, frogY2);
    scale(5, 5);
    drawfrog();
  pop();
}


function keyPressed() {
  keys[key] = true;
}

function keyReleased() {
  keys[key] = false;
}

function drawfrog() {
  noStroke();
  fill(32, 219, 36);
  beginShape();
  vertex(9, 1);
  vertex(13, 1);
  vertex(14, 4);
  vertex(17, 6);
  vertex(18, 5);
  vertex(18, 1);
  vertex(21, 3);
  vertex(19, 4);
  vertex(19, 8);
  vertex(16, 7);
  vertex(19, 9);
  vertex(20, 10);
  vertex(21, 14);
  vertex(18, 15);
  vertex(18, 11);
  vertex(15, 10);
  vertex(13, 13);
  vertex(8, 13);
  vertex(7, 11);
  vertex(5, 10);
  vertex(4, 15);
  vertex(1, 13);
  vertex(3, 11);
  vertex(4, 8);
  vertex(6, 9);
  vertex(6, 7);
  vertex(3, 7);
  vertex(3, 4);
  vertex(1, 3);
  vertex(5, 1);
  vertex(4, 6);
  vertex(8, 4);
  vertex(9, 1);
  endShape();
  fill(248, 235, 21);
  ellipse(11, 7, 2, 2);
  fill(253, 3, 217);
  ellipse(7, 3, 2, 2);
  ellipse(15, 3, 2, 2);
}
