//Physics Engine called as Matter.Engine
//World called Matter.World
//Bodies called Matter.Bodies


//replacing is called namespacing  
// FIRST STEP/////////////
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
/////////////////////////

///////////////////////
//////YOUR VARIABLES///////
var myEngine, myWorld;
var myground;
var mybox
/////////////////////

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create(); //mandatory create the engine /////////////3RD STEP
  myWorld = myEngine.world //mandatory create the world   //////////4TH STEP
mybox=new Box(200,300,50,50)
mybox2=new Box(240,100,50,100)
myground=new Ground(200,height,400,20)
}



function draw() {
  background("black");  
  
  Engine.update(myEngine);  //update the engine 5TH STEP
mybox.display()
mybox2.display()
myground.display()
}