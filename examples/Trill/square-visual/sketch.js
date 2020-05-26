let spacing;
let startPoint;
let touchSize = 0;
let touchPosition = [0, 0];
let trill;

function preload() {
	belaLogo = loadImage('../images/logo_bar14.png');
	loadScript("/libraries/Trill/Trill.js")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectWidth = height*0.7;

	trill = new Trill('square', rectWidth, [ width * 0.5, height * 0.5 ]);
}

function draw() {
	background(240);
	resizeElements();

	if(typeof Bela.data.buffers[0] != 'undefined')
		touchPosition = Bela.data.buffers[0];

	if(typeof Bela.data.buffers[1] != 'undefined')
		touchSize = Bela.data.buffers[1][0];

	trill.updateTouch(0, touchPosition, touchSize);
	trill.draw();
	image(belaLogo,width-170, height-70,120,50);
}

function resizeElements() {
	rectWidth = height*0.7;
	rectStart = height*0.1;
}

function windowResized() {
	resizeElements();
	trill.resize(rectWidth, rectStart);
	resizeCanvas(windowWidth, windowHeight);
}
