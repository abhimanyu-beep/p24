
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinclass;
var ground;
var paperclass;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	dustbinclass = new DustbinClass(100,200,30,30)
	ground =  new Ground(120,220,30,30)
	paperclass = new paperClass(140,240,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinclass.display();
  ground.display();
  paperclass.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keycode === UP_ARROW){

    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})


}

}
