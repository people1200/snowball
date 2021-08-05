const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var snowfall=[]
var maxSnow=100

function preload(){
  bg=loadImage("snow1.jpg")

}

function setup(){
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  if(frameCount%300===0){
    for(var i=0;i<maxSnow;i++){
      snowfall.push(new snow(random(0,800),random(0,400)))
    }
  }
}

function draw() {
  background(bg) 
  Engine.update(engine)
  for(var i=0;i<maxSnow;i++){
    snowfall[i].display()
    snowfall[i].update()
    
  }
  drawSprites();
}