const USER = 0;
const FOURIER = 1;
const BEGINNING = -1;
let time = 0; 
let path = [];

let x = [];
let y = [];
let fourierX;
let fourierY;
let udrawing = [];
let state = -1;


function mousePressed(){
	state = USER;
	udrawing = [];
	x = [];
	y = [];
	time = 0;
	path = [];
}

function mouseReleased(){
	state = FOURIER;
	const skip = 3;
	for(let i = 0; i < udrawing.length; i += skip){
		x.push(udrawing[i].x);
		y.push(udrawing[i].y);
	}
	fourierX = dft(x);
	fourierY = dft(y);

	fourierX.sort((a, b) => b.amp - a.amp);
	fourierY.sort((a, b) => b.amp - a.amp);
}

function setup() {

	//createCanvas(windowWidth, windowHeight);
	//background(0);
	const skip = 10;
	for(let i = 0; i < drawing.length; i += skip){
		x.push(drawing[i].x);
		y.push(drawing[i].y);
	}

	fourierX = dft(x);
	fourierY = dft(y);

	fourierX.sort((a, b) => b.amp - a.amp);
	fourierY.sort((a, b) => b.amp - a.amp);
}

function epiCycles(x, y, rotation, fourier)
{
	for(let i = 0; i < fourier.length; i++){
		let prevx = x;
		let prevy = y;
		
		let freq = fourier[i].freq;
		let radius = fourier[i].amp;
		let phase = fourier[i].phase;
		x += radius * cos(freq * time + phase + rotation);
		y += radius * sin(freq * time + phase + rotation);
		stroke(255, 100); 
		noFill();
		ellipse(prevx, prevy, radius * 2);

		stroke(255);
		line(prevx, prevy, x, y);
	}
	return createVector(x, y);
}

function draw() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	if (state == USER){
		let point = createVector(mouseX - width / 2, mouseY - height / 2);
		udrawing.push(point);
		stroke(255);
		noFill();
		beginShape();
		for(let v of udrawing){
			vertex(v.x + width / 2, v.y + height / 2);
		}
		endShape();
	}
	else if(state == FOURIER){

		let vx = epiCycles(width / 2, 100, 0, fourierX);
		let vy = epiCycles(100, height / 2, HALF_PI, fourierY);
		let v =  createVector(vx.x, vy.y);

		path.unshift(v);
		// translate(200, 0);
		// line(x - 200, y, 0, wave[0]); 
		line(vx.x, vx.y, v.x, v.y);
		line(vy.x, vy.y, v.x, v.y); 
		beginShape();
		stroke(255, 255, 0);
		noFill();
		// Draw out the path
		for(let i = 0; i < path.length; i++){
			
			vertex(path[i].x, path[i].y);
		}
		endShape();

		const dt = TWO_PI / fourierY.length;
		time += dt;

		if (time > TWO_PI){
			time = 0;
			path = [];
		}
	}
	else if(state == BEGINNING){
		let vx = epiCycles(width / 2 + 50, 100, 0, fourierX);
		let vy = epiCycles(100, height / 2 + 50, HALF_PI, fourierY);
		let v =  createVector(vx.x, vy.y);

		path.unshift(v);
		// translate(200, 0);
		// line(x - 200, y, 0, wave[0]); 
		line(vx.x, vx.y, v.x, v.y);
		line(vy.x, vy.y, v.x, v.y); 
		beginShape();
		noFill();
		// Draw out the path
		for(let i = 0; i < path.length; i++){
			stroke(255, 255, 0)
			vertex(path[i].x, path[i].y);
		}
		endShape();

		const dt = TWO_PI / fourierY.length;
		time += dt;

		if (time > TWO_PI){
			time = 0;
			path = [];
		}
	}
}