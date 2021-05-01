
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = [];
function preload()
{

}



function setup(){
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400,690,800,20);
  

  for (var i = 0; i<=innerWidth; i= i+80){
    divisons.push(new Divisions(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 50));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 120));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 190));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 260));
  }
  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 330));
  }

  Engine.run(engine);

}


function draw(){
    rectMode(CENTER);
    background(0);

    for (var n = 0; n<divisons.length; n++)  {
      divisons[n].display();
    }

    if (frameCount %50 === 0){
      particles.push(new Ball(random(width/2-800, width/2+700),10,10));
    }

    for (var h = 0; h<particles.length; h++)  {
      particles[h].display();
    }

    for (var j = 0; j<plinkos.length; j++)  {
      plinkos[j].display();
    }

    fill (200)
    text(mouseX + "," + mouseY, mouseX,mouseY)

    ground.display();
}