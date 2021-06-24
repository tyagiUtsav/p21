
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let groundobj,leftSide,rightSide;
var world;
var radius=40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0,
	  destinity:1.2

  }

  ball=Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball);

  groundobj=new Ground(width/2,670,width,20);
  leftSide=new Ground(1100,600,20,120);
  rightSide=new Ground(1350,600,20,120);


    	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
 groundobj.show();
 leftSide.show();
 rightSide.show(); 

  
 
}

function keyPressed() 
{ if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }


