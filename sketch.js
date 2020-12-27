
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log = new G(530,250,360,10);

	g1 = new Ground(550,610,600,20);
	g2 = new Ground(550,710,400,180);
	g3 = new Ground(450,710,400,180);

	bob1 = new Bob(530,530,60);
	bob2 = new Bob(590,530,60);
	bob3 = new Bob(650,530,60);
	bob4 = new Bob(470,530,60);
	bob5 = new Bob(410,530,60);
	
	r1 = new Rope(bob1.body,log.body,0,0);
	r2 = new Rope(bob2.body,log.body,60,0);
	r3 = new Rope(bob3.body,log.body,120,0);
	r4 = new Rope(bob4.body,log.body,-60,0);
	r5 = new Rope(bob5.body,log.body,-120,0);
	

	
	
	

	



	
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  g1.display();
  g2.display();

  log.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  r1.display();
  r2.display();
  r3.display();
  r5.display();
  r4.display();
  Engine.update(engine);
  
}
function keyPressed() {
	if(keyCode === UP_ARROW)
	 {
		Body.applyForce(bob4.body,bob3.body.position,{x:-20,y:-20})
	}

	
}

 




