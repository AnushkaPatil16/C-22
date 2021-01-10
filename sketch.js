const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,ground,ball;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  myengine = Engine.create();  //.world
  myworld = myengine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myworld,ground);

  var bo = {
    restitution:1
  }
  ball = Bodies.circle(200,50,30,bo);
  World.add(myworld,ball);
 
}

function draw() {
  background("cyan");  
  
  Engine.update(myengine);

  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

}