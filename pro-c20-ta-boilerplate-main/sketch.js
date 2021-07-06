
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
var  world;

var ball;
var ground;
var ball2;
var block;

function setup()
{
  createCanvas(400,400);
   
  engine = Engine.create();
  world = engine.world;

var ball_options ={

  restitution : 0.9,
  frictionAir : 0.01

}


  ball = Bodies.circle(100,200,20, ball_options);
  //(destination,object)
  World.add(world,ball)

ball2 = Bodies.circle(105,10,20,ball_options);

World.add(world,ball2)


  var ground_options ={
    isStatic : true
  }

  ground = Bodies.rectangle(200,385,400,20, ground_options)

  World.add(world,ground)

  var block_options ={
    restitution: 0.7
  }

  block = Bodies.rectangle(300,300,50,85,block_options)

World.add(world,block)

}





function draw() 
{
  background(51);
  Engine.update(engine);


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20 );
 
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  
  
  
  ellipse(ball2.position.x,ball2.position.y,20 );
 
  
  
  rect(block.position.x,block.position.y,50,85)


}

