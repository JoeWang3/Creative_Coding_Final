let startButton;
let backButton;
let scene = -1;
let player1X, player1Y, player2X, player2Y;
let keys = {};
let time = 0;
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
let player1_up_Ani, player1_down_Ani, player1_left_Ani, player1_right_Ani, player1_stay_Ani, op_Ani;
let player2_up_Ani, player2_down_Ani, player2_left_Ani, player2_right_Ani, player2_stay_Ani;
let changeDirection = true;
let changeDirection2 = true;
let player1_blood = 3;
let player2_blood = 3;
let iceBreaking;
let opX = -1000;
let opY = -1000;
let ifOp = false;
let player2_prop = -1;
let player1_prop = -1;

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
  player1X = 100;
  player1Y = 400;
  player2X = 700;
  player2Y = 400;
	
	//start button
  startButton = createButton('Start Game');
  startButton.position(760, 400);
 	startButton.mousePressed(startGame);
	
	startButton.style('width', '200px'); 
  startButton.style('height', '60px');
	startButton.style('background-color', 'deepskyblue'); 
	startButton.style('color', 'greenyellow'); 
	startButton.style('border', 'none'); 
	startButton.style('border-radius', '8px'); 
	startButton.style('font-size', '20px'); 
	startButton.style('font-weight', 'bold'); 
	
	// go back button
  backButton = createButton('Go Back');
  backButton.position(1000, 700);
  backButton.mousePressed(goBack);
	
	backButton.style('width', '200px'); 
  backButton.style('height', '60px');
	backButton.style('background-color', 'mediumspringgreen'); 
	backButton.style('color', 'coral'); 
	backButton.style('border', 'none'); 
	backButton.style('border-radius', '8px'); 
	backButton.style('font-size', '22px'); 
	backButton.style('font-weight', 'bold'); 
	
	// load animation
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
	
	op_Ani = loadAnimation("op_1.png", "op_2.png", "op_3.png", "op_4.png", "op_5.png"); 
	op_Ani.frameDelay = 15;
}

function draw() {
	// console.log(scene)
	if(scene == -1){ // start page
		clear();
		startButton.show();
		backButton.hide();
		background(bgImage);
	}
	else if(scene == 0){ // main playing page
		clear();
		time += 0.01;
		background(map_1);
		startButton.hide();
		backButton.hide();
		image(ice, 300,300);
		image(ice, 300,400);
		image(ice, 300,500);
		
		if(time == 6.009999999999916 && ifOp == false){
			if (random(1) < 0.5) {
    		opX = random(100, 201);
  		} else {
    		opX = random(400, 701);
 			}
			opY = random(100, 700);
			ifOp = true;
		}
		
		// console.log(time);
		
		if(ifOp == true){
			push();
			translate(opX, opY);
			scale(1.5);
			animation(op_Ani, 0, 0);
			pop();
		}
		
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

		// draw the knife if the user launch the knife
		if(ifKnifeAni == true){
			push();
			translate(knifeX, knifeY);
			scale(0.3);
			animation(knifeAni, 0, 0);
			pop();
			let s = 10;
			
			if(player1_prop == 0){
				s = 30;
			}
			if(direction1 == 0){
				knifeY -= s;
			}
			else if(direction1 == 1){
				knifeY += s;
			}
			else if(direction1 == 2){
				knifeX -= s;
			}
			else{
				knifeX += s;
			}
		}
		
		if(ifKnifeAni2 == true){
			push();
			translate(knife2X, knife2Y);
			scale(0.3);
			animation(knifeAni, 0, 0);
			pop();
			let s = 10;
			if(player2_prop == 0){
				s = 20;
			}
			if(direction2 == 0){
				knife2Y -= s;
			}
			else if(direction2 == 1){
				knife2Y += s;
			}
			else if(direction2 == 2){
				knife2X -= s;
			}
			else{
				knife2X += s;
			}
		}
		
		// if knife out of border, kill the knife
		if(knifeY <= 0 || knifeY >= 800 || knifeX <= 0 || knifeX >= 800){
			ifKnifeAni = false;
			changeDirection = true;
			knifeX = -1000;
			knifeY = -1000;
		}
		if(knife2Y <= 0 || knife2Y >= 800 || knife2X <= 0 || knife2X >= 800){
			ifKnifeAni2 = false;
			changeDirection2 = true;
			knife2X = -1000;
      knife2Y = -1000;
		}
		
		// let user control the character
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
			let s = 10;
			if(player1_prop == 2){
				s = 15;
			}
    	if(player1X >= 260 && player1X <= 440 && player1Y >= 650 && player1Y - s <= 650){
			player1Y = 650;
			}
			else{
				player1Y -= s;
			}
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
			let s = 10;
			if(player1_prop == 2){
				s = 15;
			}
			if(player1X >= 260 && player1X <= 440 && player1Y <= 250 && player1Y + s >= 250){
			player1Y = 250;
			}
			else{
				player1Y += s;
			}
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
			let s = 10;
			if(player1_prop == 2){
				s = 15;
			}
    	if(player1X >= 450 && player1X - s <= 450 && player1Y <= 650 && player1Y >= 250){
			player1X = 450;
			}
			else{
				player1X -= s;
			}
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
			let s = 10;
			if(player1_prop == 2){
				s = 15;
			}
			if(player1X <= 250 && player1X + s >= 250 && player1Y <= 630 && player1Y >= 270){
			player1X = 250;
			}
			else{
				player1X += s;
			}
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
			let s = 10;
			if(player2_prop == 2){
				s = 15;
			}
    	if(player2X >= 260 && player2X <= 440 && player2Y >= 650 && player2Y - s <= 650){
			player2Y = 650;
			}
			else{
				player2Y -= s;
			}
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
			let s = 10;
			if(player2_prop == 2){
				s = 15;
			}
    	if(player2X >= 260 && player2X <= 440 && player2Y <= 250 && player2Y + s >= 250){
			player2Y = 250;
			}
			else{
				player2Y += s;
			}
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
			let s = 10;
			if(player2_prop == 2){
				s = 15;
			}
    	if(player2X >= 450 && player2X - s <= 450 && player2Y <= 650 && player2Y >= 250){
			player2X = 450;
			}
			else{
				player2X -= s;
			}
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
			let s = 10;
			if(player2_prop == 2){
				s = 15;
			}
    	if(player2X <= 250 && player2X + s >= 250 && player2Y <= 630 && player2Y >= 270){
			player2X = 250;
			}
			else{
				player2X += s;
			}
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
		
		// check if the knife hit the user
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
		
		// check if the knife hit the ice
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
		
		if(checkCollision2(player1X-50, player1Y-50, 100, 100, opX - 40, opY - 40, 80, 80) == true ){
			ifOp = false;
			opX = -1000;
			opY = -1000;
			player1_prop = floor(random(0,3));
			time = 0;
		}
		
		if(checkCollision2(player2X-50, player2Y-50, 100, 100, opX - 40, opY - 40, 80, 80) == true ){
			ifOp = false;
			opX = -1000;
			opY = -1000;
			player2_prop = floor(random(0,3));
			time = 0;
		}
		
		if(player1_prop == 1){
			if(player1_blood < 3){
				player1_blood += 1;
			}
			player1_prop = -1;
		}
		if(player2_prop == 1){
			if(player2_blood < 3){
				player2_blood += 1;
			}
			player2_prop = -1;
		}
		}
	else if(scene == 1){ // player2 win page
		clear();
		background(player2_win); 
		startButton.hide();
		backButton.show();
	}
	else if(scene == 2){ // player1 win page
		clear();
		background(player1_win); 
		startButton.hide();
		backButton.show();
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
	time = 0;
}

function goBack() {
  scene = -1;
	player1_blood = 3;
  player2_blood = 3;
	player1X = 100;
  player1Y = 400;
  player2X = 700;
  player2Y = 400;
	knifeX = -1000;
  knifeY = -1000;
  knife2X = -1000;
  knife2Y = -1000;
  ifKnifeAni = false;
  ifKnifeAni2 = false;
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