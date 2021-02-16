
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	ground = new Ground(800,480,1600,70);
paper = new Paper(170,390,70)
	dustbin1= new dust(900,450)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(" #ffb865");
  
  drawSprites();
  ground.display();    
  paper.display();
  dustbin1.display();
  


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:240,y:-220});   

	   
   }

}
