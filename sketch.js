const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var snow = []
var ground;
var snow1;
function preload (){
  snow1 = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 //ground = new Ground(width/2,400,width,10);
 //if(frameCount % 100===0){


  for (var i = 0; i < 100; i++) {
   snow.push(new Snowfall(random(0,width),random(0,height)))
   //console.log(0);
  
   }
 //}
 
}

function draw() {

  background(snow1);  
  Engine.update(engine);
  //ground.display();

   
  //if(frameCount % 60 === 0 ){
   // console.log(1);
    
    
   // }
  
   //if(frameCount % 60===0){
    for (var j = 0; j < 100; j++) {
      snow[j].ab();
     
    snow[j].display();
    }//}
}
