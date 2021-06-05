
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree1;
var mango1, mango2, mango3, mango4;
var stone1;

var world,boy, boyImg;
var ground1;
var slingshot1;

//Declare launcherObject and launchForce variable here



function preload(){
  boyImg = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


  tree1= new Tree(1000,350,300,300);
  mango1= new Mango(920,350, 30, 30);
  mango2= new Mango(1020,250,30,30);
  mango3= new Mango(950,280,30,30);
  mango4= new Mango(1050,310,30,30);
  stone1= new Stone(200,300,40)
  ground1= new Ground(600,500,1300,20);
  slingshot1=new Slingshot(stone1.body,{x:235,y:420})


  boy=createSprite(200,400)
  boy.addImage("boythrowing",boyImg);
  boy.scale=0.1;


	
  //create launcherObject here


	Engine.run(engine);
}

function draw() {
  
  background(230);
 tree1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 stone1.display();
 ground1.display();
 slingshot1.display();

drawSprites();
keyPressed();

}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}


//create mouseReleased function here
function mouseReleased(){
  slingshot1.fly();

}


//create keyPressed function here
function keyPressed(){
  if(keyDown("SPACE")){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    slingshot1.attach(stone1.body);
  }

}


 