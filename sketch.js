const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var gameState="onSling"
var score=0
var engine, world;
var box1, pig1;
var bird;
var backgroundImg;
var platform;      
var slingshot;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //platform=new Ground(180,305,300,170)
    ground = new Ground(600,height,1200,20)

    box1 = new Box(300,320,70,70);
    box2 = new Box(520,320,70,70);
    pig1 = new Pig(410, 350);
    log1 = new Log(410,260,300, PI/2);

    box3 = new Box(300,240,70,70);
    box4 = new Box(520,240,70,70);
    pig3 = new Pig(410, 220);

    log3 =  new Log(410,180,300, PI/2);

    box5 = new Box(410,160,70,70);
    log4 = new Log(360,120,150, PI/7);
    log5 = new Log(470,120,150, -PI/7);

    bird = new Bird(200,60);
    
  
  slingshot = new Slingshot(bird.body,{x:200,y:60});
 

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(30)
    text("Puntuación " + score, width-300, 50)
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    //platform.display();

    slingshot.display();

    //constraintlog.display();
}
function mouseDragged(){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
 }
 
async function getBackgroundImage(){

    var response=await fetch("http://worldtimeapi.org/api/timezone/America/MexicoCity");
    var responseJSON=await response.json();//CAMBIAMOS EL API A FORMATO JSON...EN RENGLONES
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    if(hour>6&&hour<20){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}