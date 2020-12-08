
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; var dustbin,dustbin1,dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,665,1600,20);
  paper = new Paper (200,450,20);
  dustbin = new Dustbin (1200,650,200,10);
  dustbin1 = new Dustbin (1300,555,10,200);
  dustbin2 = new Dustbin (1100,555,10,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();

}

function keyPressed(){
if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-25});
}
}