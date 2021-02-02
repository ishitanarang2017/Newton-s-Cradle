const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3, ballObject4,ballObject5, groundObject
var slingshot1,slingshot2,slingshot3, slingshot4,slingshot5;
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject=new Ground(width/2,height/4,width/7,20);

	ballDiameter=20;

	startballPositionX=width/2;
	startballPositionY=height/4+300;
	ballObject1=new Ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ballObject2=new Ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ballObject3=new Ball(startballPositionX,startballPositionY,ballDiameter);
	ballObject4=new Ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ballObject5=new Ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);
	
	slingshot1=new Slingshot(ballObject1.body,groundObject.body,-ballDiameter*2, 0)

	slingshot2=new Slingshot(ballObject2.body,groundObject.body,-ballDiameter*1, 0)
	slingshot3=new Slingshot(ballObject3.body,groundObject.body,0, 0)
	slingshot4=new Slingshot(ballObject4.body,groundObject.body,ballDiameter*1, 0)
	slingshot5=new Slingshot(ballObject5.body,groundObject.body,ballDiameter*2, 0)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();

  slingshot1.display()
  slingshot2.display()
  slingshot3.display()
  slingshot4.display()
  slingshot5.display()	
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-40,y:-40});

  	}
}
