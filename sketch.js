
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,20);
	//Create the Bodies Here.
	box1 = new Box(600,650,200,20);
	box2 = new Box(500,610,20,100);
	box3 = new Box(700,610,20,100);

	paper1 = new Paper(50,300,20,20);
	
	Engine.run(engine);
  
}


function draw() {

  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();

  
}



