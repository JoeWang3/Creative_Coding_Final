let startButton;
let viewCharactersButton;
let scene = -1;
let frogX, frogY, frogX2, frogY2;
let frogAngle;
let keys = {};
let show = -1;
let frogExist = true;
let frog2Exist = true;
let bgImage;
let knifeImage;
let knifeX = -1000;
let knifeY = -1000;
let knife2X = -1000;
let knife2Y = -1000;
let ifKnifeAni = false;
let ifKnifeAni2 = false;

function preload() {
    knifeImage = loadImage("knife.png", img => {
			img.resize(200, 200);
		}); 
		bgImage = loadImage("homePage.png", img => {
    img.resize(800, 800);
  });

}

function setup() {
  createCanvas(800, 800);
  background(bgImage);
	frogAngle = 0;
  frogX = width/2;
  frogY = height/2;
  frogX2 = 100;
  frogY2 = 0;
	
  startButton = createButton('Start Game');
  startButton.position(760, 400);
  startButton.style('width', '200px'); 
  startButton.style('height', '60px');
  startButton.mousePressed(startGame);

  viewCharactersButton = createButton('View Characters');
  viewCharactersButton.position(1000, 700);
  viewCharactersButton.mousePressed(viewCharacters);
	knifeAni = loadAnimation("knife_1.png", "knife_2.png", "knife_3.png",); 
	knifeAni.frameDelay = 5;
}

function draw() {
	if(scene == -1){
		clear();
		startButton.show();
    viewCharactersButton.show();
		background(bgImage);
	}
	else if(scene == 0){
		clear();
		background(0, 255, 255); 
		startButton.hide();
    viewCharactersButton.hide();
		
		if(ifKnifeAni == true){
			push();
			translate(knifeX, knifeY);
			scale(0.3);
			animation(knifeAni, 0, 0);
			pop();
			knifeY -= 10;
		}
		
		if(ifKnifeAni2 == true){
			push();
			translate(knife2X, knife2Y);
			scale(0.3);
			animation(knifeAni, 0, 0);
			pop();
			knife2Y += 10;
		}
		
		if(knifeY <= 0 || knifeY >= 800 || knifeX <= 0 || knifeX >= 800){
			ifKnifeAni = false;
		}
		if(knife2Y <= 0 || knife2Y >= 800 || knife2X <= 0 || knife2X >= 800){
			ifKnifeAni2 = false;
		}
		
    if (keys['e'] || keys['E']) {
			knifeX = frogX;
			knifeY = frogY;
			ifKnifeAni = true;
  	}
		if (keys['SHIFT']) {
			knife2X = frogX2;
			knife2Y = frogY2;
			ifKnifeAni2 = true;
  	}
		if (keys['w'] || keys['W']) {
			show = 0;
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
		
		if(checkCollision(knifeX, knifeY, frogX2, frogY2) == true){
			frogExist = false;
		}
		if(checkCollision(knife2X, knife2Y, frogX, frogY) == true){
			frog2Exist = false;
		}

		if(frog2Exist == true){
			push();
    		translate(frogX, frogY);
    		scale(5, 5);
    		translate(-10, -7);
    		drawfrog();
  		pop();
		}
		
		if(frogExist == true){
			push();
    		translate(frogX2, frogY2);
    		scale(5, 5);
				translate(-10, -7);
    		drawfrog();
  		pop();
		}
		}

}

function keyPressed() {
  keys[key] = true;
	if (keyCode === SHIFT) {
    keys['SHIFT'] = true;
  }
}

function keyReleased() {
  keys[key] = false;
	if (keyCode === SHIFT) {
    keys['SHIFT'] = false;
  }
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


function startGame() {
  console.log("Game started!");
	scene = 0;

}

function viewCharacters() {
  console.log("Viewing characters");

}

function checkCollision(knifeX, knifeY, frogX, frogY) {
  let knifeLeft = knifeX - 50;
  let knifeRight = knifeX + 50;
  let knifeTop = knifeY - 50; 
  let knifeBottom = knifeY + 50;

  let frogLeft = frogX - 50;
  let frogRight = frogX + 50;
  let frogTop = frogY - 50;
  let frogBottom = frogY + 50;

  if (knifeRight >= frogLeft && knifeLeft <= frogRight &&
      knifeBottom >= frogTop && knifeTop <= frogBottom) {
    return true;
  } else {
    return false;
  }
}
