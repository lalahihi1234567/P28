const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,790,1200,20);
	tree=new Tree(900,500);
	boy=new Boy(200,730);
	stone=new Stone(180,730,50,50);
	launch=new Slingshot(stone.body,{x:180,y:700});
	mango1=new Mango(1000,350,30,30);
	mango2=new Mango(900,400,30,30);
	mango3=new Mango(950,450,30,30);
	mango4=new Mango(800,380,30,30);
	mango5=new Mango(850,330,30,30);
	mango6=new Mango(1050,470,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  detectCollision(mango1,stone);
  mango2.display();
  detectCollision(mango2,stone);
  mango3.display();
  detectCollision(mango3,stone);
  mango4.display();
  detectCollision(mango4,stone);
  mango5.display();
  detectCollision(mango5,stone);
  mango6.display();
  detectCollision(mango6,stone);
  launch.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launch.fly();
}
function detectCollision(object1,object2){
  mangoBodyPosition = object1.body.position
  stoneBodyPosition = object2.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=object1.width/2+object2.width/2)
  {
	  Matter.Body.setStatic(object1.body, false);
  }
}