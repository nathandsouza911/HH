
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,600,100,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  roof.display();
 
}



