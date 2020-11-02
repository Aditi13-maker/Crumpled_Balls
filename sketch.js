const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var trash;
function setup() {
var canvas = createCanvas(900,300);
    
	engine = Engine.create();
	world = engine.world;

	trashObject=new Trash(50,280,30);
  dustbin1=new Dustbin(700,242,10,70);
  dustbin2=new Dustbin(658,280,80,10)
  dustbin3=new Dustbin(615,242,10,70);
	ground=new Ground(290,290,1600,10)
  
}


function draw() {

  background("black");
  Engine.update(engine);
  trashObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
 drawSprites()
}
function keyPressed() {
   if (keyCode === UP_ARROW) { 
     Matter.Body.applyForce(trashObject.body,trashObject.body.position,{x:10,y:-20}); }
     }