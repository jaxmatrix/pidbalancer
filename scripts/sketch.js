var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Body = Matter.Body,
	Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var elements = [];
var pivot;
var ledge;
var pinJoint;
var ball;
var controller;
var control; 

function setup(){
	height = 400 ;
	width = 400;
 	createCanvas(width, height);
	
	//Setting up the physics 
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	angleMode(RADIANS);
	frameRate(60);
	//Setting the world
	ground = new Ground(0,height-50,width,50);
	
	//Sea Saw
	pivot = new Poly(width/2,height*0.70-30,3,20, true);
	balancePoint = pivot.getVertex(2);
	ledge = new Boxy(balancePoint.x, balancePoint.y - 5, 300, 40, true);
	elements.push(pivot,ledge);

	Body.rotate(ledge.body, -PI/120);
	/*	
	var pinJointOption = {
		bodyA:pivot.body,
		bodyB:ledge.body,
		length:0,
		stiffness:1,
		pointA:{
			x:balancePoint.x-pivot.body.position.x,
			y:balancePoint.y-pivot.body.position.y,
		},

		pointB:{
			x:0,
			y:ledge.h/2,
		}
	};

	pinJoint = Constraint.create(pinJointOption);
	World.add(world, pinJoint);
*/

	//Ball that is to be balanced 
	var radius = 5;
	ball = new Circle(random(ledge.w*0.9) +balancePoint.x - ledge.w/2, ledge.h+balancePoint.y - ledge.h- radius - 20, radius);
	elements.push(ball);

	//Starting the physics engine
	controller = new Controller(ledge,ball);
	control = new Control(controller);
}


function mousePressed(){
//	var boxy = new Circle(mouseX,mouseY,20);
//	elements.push(boxy);
}

function draw(){
	// Fundamental Functions
	background(200);
	ground.show();
	//Engine.update(engine, 24, 4);

	control.play();
	for(var i = 0; i < elements.length ; i++){
		elements[i].show();
		if( elements[i].isOffScreen() ){
			
			object = elements.splice(i,1);
			World.remove(world, object);
			i--;

		}
	}


}
