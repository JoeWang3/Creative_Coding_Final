let startButton;
let viewCharactersButton;
let scene = -1;
let player1X, player1Y, player2X, player2Y;
let keys = {};
let frogExist = true;
let frog2Exist = true;
let bgImage;
let knifeImage, map_1, ice;
let one_blood, two_blood, three_blood, player1_win, player2_win, left_arrow, right_arrow, up_arrow, down_arrow;
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
let player1_blood = 3;
let player2_blood = 3;
let iceBreaking;

function preload() {
	iceBreaking = loadSound('iceBreaking.mp3');
    knifeImage = loadImage("knife.png", img => {
			img.resize(200, 200);
		}); 
		bgImage = loadImage("homePage.png", img => {
    img.resize(800, 800);
  });
		one_blood = loadImage("one_blood.png", img => {
    	img.resize(100, 100);
  	});
		two_blood = loadImage("two_blood.png", img => {
    	img.resize(100, 100);
  	});
		three_blood = loadImage("three_blood.png", img => {
    	img.resize(100, 100);
  	});
	player1_win = loadImage("player1_win.png")
	player2_win = loadImage("player2_win.png")
	map_1 = loadImage("map_1.png", img => {
    img.resize(800, 800);
  });
	ice = loadImage("ice.png", img => {
    img.resize(100, 100);
  });
	left_arrow = loadImage("arrow_left.png", img => {
    img.resize(50, 50);
  });
	right_arrow = loadImage("arrow_right.png", img => {
    img.resize(50, 50);
  });
	up_arrow = loadImage("arrow_up.png", img => {
    img.resize(50, 50);
  });
	down_arrow = loadImage("arrow_down.png", img => {
    img.resize(50, 50);
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
		background(map_1);
		startButton.hide();
    viewCharactersButton.hide();
		
		image(ice, 300,300);
		image(ice, 300,400);
		image(ice, 300,500);
		
		// image(ice, 500,100);
		// image(ice, 500,200);
		
		// Disable the character from running out of the screen 
		if(player1X <= 0){
			player1X = 0;
		}
		if(player1X >= 800){
			player1X = 800;
		}
		if(player1Y <= 0){
			player1Y = 0;
		}
		if(player1Y >= 800){
			player1Y = 800;
		}
		if(player2X <= 0){
			player2X = 0;
		}
		if(player2X >= 800){
			player2X = 800;
		}
		if(player2Y <= 0){
			player2Y = 0;
		}
		if(player2Y >= 800){
			player2Y = 800;
		}
		
		
		// draw the blood of the two players
		if(player1_blood == 3){
			image(three_blood, player1X-50, player1Y-110);
		}
		else if (player1_blood == 2){
			image(two_blood, player1X-50, player1Y-110);
		}
		else if(player1_blood == 1){
			image(one_blood, player1X-50, player1Y-110);
		}else{
			scene = 1; // player2 wins
		}
		
		if(player2_blood == 3){
			image(three_blood, player2X-50, player2Y-110);
		}
		else if (player2_blood == 2){
			image(two_blood, player2X-50, player2Y-110);
		}else if(player2_blood == 1){
			image(one_blood, player2X-50, player2Y-110);
		}
		else{
			scene = 2; // player1 wins
		}
		
		// draw a direction arrow on the top of the character to show the user where the knife will go
		if(direction1 == 0){
			image(up_arrow, player1X+50, player1Y-90);
		}
		else if(direction1 == 1){
			image(down_arrow, player1X+50, player1Y-90);
		}
		else if(direction1 == 3){
			image(right_arrow, player1X+50, player1Y-90);
		}
		else if(direction1 == 2){
			image(left_arrow, player1X+50, player1Y-90);
		}
		if(direction2 == 0){
			image(up_arrow, player2X+50, player2Y-90);
		}
		else if(direction2 == 1){
			image(down_arrow, player2X+50, player2Y-90);
		}
		else if(direction2 == 3){
			image(right_arrow, player2X+50, player2Y-90);
		}
		else if(direction2 == 2){
			image(left_arrow, player2X+50, player2Y-90);
		}

		
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
		
    if (keys['e']) {
			if(changeDirection == true){
				knifeX = player1X;
				knifeY = player1Y;
				ifKnifeAni = true;
				changeDirection = false;
			}
			
  	}
		if (keys['/']) {
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
			player2_blood -= 1;
			changeDirection = true;
			ifKnifeAni = false;
			knifeX = -1000;
			knifeY = -1000;
		}
		if(checkCollision(knife2X, knife2Y, player1X, player1Y) == true){
			player1_blood -= 1;
			changeDirection2 = true;
			ifKnifeAni2 = false;
			knife2X = -1000;
			knife2Y = -1000;
		}
		if(checkCollision2(knife2X-50, knife2Y-50,100, 100, 300, 300, 100, 300) == true ){
			changeDirection2 = true;
			ifKnifeAni2 = false;
			knife2X = -1000;
			knife2Y = -1000;
			iceBreaking.play();
		}
		
		if(checkCollision2(knifeX-50, knifeY-50,100, 100, 300, 300, 100, 300) == true ){
			changeDirection = true;
			ifKnifeAni = false;
			knifeX = -1000;
			knifeY = -1000;
			iceBreaking.play();
		}

		
		}
	else if(scene == 1){
		clear();
		background(player2_win); 
		startButton.hide();
    viewCharactersButton.hide();
	}
	else if(scene == 2){
		clear();
		background(player1_win); 
		startButton.hide();
    viewCharactersButton.hide();
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

function checkCollision2(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 + w1 < x2) return false;

    if (x1 > x2 + w2) return false;

    if (y1 + h1 < y2) return false;

    if (y1 > y2 + h2) return false;
    return true;
}