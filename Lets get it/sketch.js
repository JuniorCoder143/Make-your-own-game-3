const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var ground1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500,350,2000,20)
  tarzann = new Tarzan(350,300,50,30)
  obstacles = new Obstacle(300,300)
}

function draw() {
  background("cyan");  
  Engine.update(engine)
  ground1.velocityY = -2
  
  ground1.display();
  tarzann.display();
  obstacles.display();
}