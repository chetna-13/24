
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var object;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject = new Dustbin(1200,650);
	
	ground = createSprite(width/2,670,width,10);
	 ground.shapeColor="yellow";
	 
	object = new Paper(200,450,50);
    
	Engine.run(engine);
  
}


function draw() {
 	 rectMode(CENTER);
  	 background(0);
 	 Engine.update(engine);
 	 dustbinObject.display();
    	object.display();

  drawSprites();
 
}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(object.body,object.body.position,{x:85,y:-85});
		}
	}