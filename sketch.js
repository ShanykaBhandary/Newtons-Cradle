
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,roof1,rope1,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
   bob1=new bob(100,300)
   bob2=new bob(200,300)
   bob3=new bob(300,300) 
   bob4=new bob(400,300)
   bob5=new bob(500,300)
   roof1=new roof(300,100,800,100)
   rope1=new rope(bob1.body,roof1.body,-100,0)
   rope2=new rope(bob2.body,roof1.body,-50,0)
   rope3=new rope(bob3.body,roof1.body,0,0)
   rope4=new rope(bob4.body,roof1.body,50,0)
   rope5=new rope(bob5.body,roof1.body,100,0)
   ground=createSprite(400,690,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(Engine)
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display(); 

 drawSprites();
}
  function keyPressed(){
    if(keyCode === UP_ARROW){
  
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
  
  
   }
  }
  
 
 

 


