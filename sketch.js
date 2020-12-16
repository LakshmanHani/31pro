const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1

function setup() {
  createCanvas(800,600);
  ground1 = new Ground(590,400,200,10)
  World.add(world,ground);
}

function draw() {
  background(0); 
  ground1.display();
}