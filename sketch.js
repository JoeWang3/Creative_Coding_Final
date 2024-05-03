let startButton;
let viewCharactersButton;
let scene = -1;
let player1X, player1Y, player2X, player2Y;
let keys = {};
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
let direction1, direction2;
let player1_up_Ani, player1_down_Ani, player1_left_Ani, player1_right_Ani, player1_stay_Ani;
let player2_up_Ani, player2_down_Ani, player2_left_Ani, player2_right_Ani, player2_stay_Ani;
let changeDirection = true;
let changeDirection2 = true;

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
  player1X = 200;
  player1Y = 400;
  player2X = 600;
  player2Y = 400;
	
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
  player1_up_Ani = loadAnimation('melon_up_1.png','melon_up_2.png','melon_up_3.png');
  player1_up_Ani.frameDelay = 10;
	player1_stay_Ani = loadAnimation('melon_stay.png');
	player1_down_Ani = loadAnimation('melon_down_1.png','melon_down_2.png','melon_down_3.png');
  player1_down_Ani.frameDelay = 10;
	player1_left_Ani = loadAnimation('melon_left_1.png','melon_left_2.png');
  player1_left_Ani.frameDelay = 10;
	player1_right_Ani = loadAnimation('melon_right_1.png','melon_right_2.png','melon_right_3.png');
  player1_right_Ani.frameDelay = 10;
	
	player2_stay_Ani = loadAnimation('banana_down_1.png');
	player2_up_Ani = loadAnimation('banana_up_1.png','banana_up_2.png','banana_up_3.png');
  player2_up_Ani.frameDelay = 10;
	player2_down_Ani = loadAnimation('banana_down_1.png','banana_down_2.png','banana_down_3.png');
  player2_down_Ani.frameDelay = 10;
	player2_left_Ani = loadAnimation('banana_left_1.png','banana_left_2.png');
  player2_left_Ani.frameDelay = 10;
	player2_right_Ani = loadAnimation('banana_right_1.png','banana_right_2.png','banana_right_3.png');
  player2_right_Ani.frameDelay = 10;
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
			if(direction1 == 0){
				knifeY -= 10;
			}
			else if(direction1 == 1){
				knifeY += 10;
			}
			else if(direction1 == 2){
				knifeX -= 10;
			}
			else{
				knifeX += 10;
			}
		}
		
		if(ifKnifeAni2 == true){
			push();
			translate(knife2X, knife2Y);
			scale(0.3);
			animation(knifeAni, 0, 0);
			pop();
			if(direction2 == 0){
				knife2Y -= 10;
			}
			else if(direction2 == 1){
				knife2Y += 10;
			}
			else if(direction2 == 2){
				knife2X -= 10;
			}
			else{
				knife2X += 10;
			}
		}
		
		if(knifeY <= 0 || knifeY >= 800 || knifeX <= 0 || knifeX >= 800){
			ifKnifeAni = false;
			changeDirection = true;
		}
		if(knife2Y <= 0 || knife2Y >= 800 || knife2X <= 0 || knife2X >= 800){
			ifKnifeAni2 = false;
			changeDirection2 = true;
		}
		
    if (keys['e'] || keys['E']) {
			if(changeDirection == true){
				knifeX = player1X;
				knifeY = player1Y;
				ifKnifeAni = true;
				changeDirection = false;
			}
			
  	}
		if (keys['SHIFT']) {
			if(changeDirection2 == true){
				knife2X = player2X;
				knife2Y = player2Y;
				ifKnifeAni2 = true;
				changeDirection2 = false;
			}
  	}
		if (keys['w'] || keys['W']) {
      push();
			translate(player1X, player1Y);
			scale(0.4);
			animation(player1_up_Ani, 0, 0);
			pop();
    	player1Y -= 10;
			if(changeDirection == true){
				direction1 = 0;
				changeDirection = false;
			}
  	}
  	else if (keys['s'] || keys['S']) {
			push();
			translate(player1X, player1Y);
			scale(0.4);
			animation(player1_down_Ani, 0, 0);
			pop();
    	player1Y += 10;
			if(changeDirection == true){
				direction1 = 1;
				changeDirection = false;
			}
  	}
  	else if (keys['a'] || keys['A']) {
			push();
			translate(player1X, player1Y);
			scale(0.4);
			animation(player1_left_Ani, 0, 0);
			pop();
    	player1X -= 10;
			if(changeDirection == true){
				direction1 = 2;
				changeDirection = false;
			}
  	}
  	else if (keys['d'] || keys['D']) {
			push();
			translate(player1X, player1Y);
			scale(0.4);
			animation(player1_right_Ani, 0, 0);
			pop();
    	player1X += 10;
			if(changeDirection == true){
				direction1 = 3;
				changeDirection = false;
			}
  	}
		else{
			push();
			translate(player1X, player1Y);
			scale(0.4);
			animation(player1_stay_Ani, 0, 0);
			pop();
		}
  	if (keys['ArrowUp']) {
    	push();
			translate(player2X, player2Y);
			scale(0.5);
			animation(player2_up_Ani, 0, 0);
			pop();
    	player2Y -= 10;
			if(changeDirection2 == true){
				direction2 = 0;
				changeDirection2 = false;
			}
  	}
  	else if (keys['ArrowDown']) {
    	push();
			translate(player2X, player2Y);
			scale(0.5);
			animation(player2_down_Ani, 0, 0);
			pop();
    	player2Y += 10;
			if(changeDirection2 == true){
				direction2 = 1;
				changeDirection2 = false;
			}
  	}
  	else if (keys['ArrowLeft']) {
    	push();
			translate(player2X, player2Y);
			scale(0.5);
			animation(player2_left_Ani, 0, 0);
			pop();
    	player2X -= 10;
			if(changeDirection2 == true){
				direction2 = 2;
				changeDirection2 = false;
			}
  	}
  	else if (keys['ArrowRight']) {
    	push();
			translate(player2X, player2Y);
			scale(0.5);
			animation(player2_right_Ani, 0, 0);
			pop();
    	player2X += 10;
			if(changeDirection2 == true){
				direction2 = 3;
				changeDirection2 = false;
			}
  	}
		else{
			push();
			translate(player2X, player2Y);
			scale(0.5);
			animation(player2_stay_Ani, 0, 0);
			pop();
		}
		
		if(checkCollision(knifeX, knifeY, player2X, player2Y) == true){
			frogExist = false;
		}
		if(checkCollision(knife2X, knife2Y, player1X, player1Y) == true){
			frog2Exist = false;
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


function startGame() {
  console.log("Game started!");
	scene = 0;
}

function viewCharacters() {
  console.log("Viewing characters");

}

function checkCollision(knifeX, knifeY, player1X, player1Y) {
  let knifeLeft = knifeX - 50;
  let knifeRight = knifeX + 50;
  let knifeTop = knifeY - 50; 
  let knifeBottom = knifeY + 50;

  let frogLeft = player1X - 50;
  let frogRight = player1X + 50;
  let frogTop = player1Y - 50;
  let frogBottom = player1Y + 50;

  if (knifeRight >= frogLeft && knifeLeft <= frogRight &&
      knifeBottom >= frogTop && knifeTop <= frogBottom) {
    return true;
  } else {
    return false;
  }
}

function launchKnife(direction){
	push();
	translate(knifeX, knifeY);
	scale(0.3);
	animation(knifeAni, 0, 0);
	pop();
	if(direction == 0){
		knifeY -= 10;
	}
	else if(direction == 1){
		knifeY += 10;
	}
	else if(direction == 2){
		knifeX -= 10;
	}
	else{
		knifeX += 10;
	}
}