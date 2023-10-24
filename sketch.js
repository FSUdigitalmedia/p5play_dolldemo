// a demo showing how to allow drag and drop a sprite
// and how to know if the sprite was dragged to the right place

let backgroundImg;
let jacketImg, dressImg;
let jacket, dress;
let dollCenter;
let whatSheWearing;

function preload() {
    jacketImg = loadImage("assets/jacket.png");
    dressImg = loadImage("assets/dress.png");
    backgroundImg = loadImage("assets/original.jpg");
}

function setup() {
    new Canvas(1024,727);
    rectMode(CENTER);
    allSprites.rotationLock = true;

    dollCenter = createVector(133,420);
    
    jacket = new Sprite();
    jacket.img = jacketImg;
    jacket.position = createVector(900, 500);
    jacket.drag = 10;

    dress = new Sprite();
    dress.img = dressImg;
    dress.position = createVector(450, 570);
    dress.drag = 10;
}

function draw() {
    background(backgroundImg);

    if (dress.mouse.dragging()) {
		dress.moveTowards(
			mouse.x + dress.mouse.x,
			mouse.y + dress.mouse.y,
			1 // a lower number will track the mouse slower
		);
	}

    if (jacket.mouse.dragging()) {
		jacket.moveTowards(
			mouse.x + jacket.mouse.x,
			mouse.y + jacket.mouse.y,
			1 // a lower number will track the mouse slower
		);
	}

    if (dist(dress.x,dress.y,dollCenter.x,dollCenter.y) < 20) {
        dress.position = dollCenter;
        whatSheWearing = "dress";
    } else { 
        whatSheWearing = "nothing";
    }

    if (dist(jacket.x,jacket.y,dollCenter.x,dollCenter.y) < 20) {
        jacket.position = createVector(dollCenter.x-10, dollCenter.y-10);
        whatSheWearing = "jacket";
    } else { 
        whatSheWearing = "nothing";
    }

    text(whatSheWearing, 100, 100)
}
