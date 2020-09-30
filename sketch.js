const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(780,460,70,70);
    box2 = new Box(1020,460,70,70);
    pig1 = new Pig(900,460);
    bird1 = new Bird(100,250);
    log1 = new log(900,400,320,PI/2);

    box3 = new Box(780,380,70,70);
    box4 = new Box(1020,380,70,70);
    pig2 = new Pig(900,380);
    log2 = new log(900,370,320,PI/2);
    
    box5 = new Box(900,350,70,70);
    log3 = new log(850,350,150,PI/7);
    log4 = new log(950,350,150,-PI/7);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    text(mouseX + ","+mouseY,200,20);   
    box1.display();
    box2.display();
    pig1.display();
    bird1.display();
    log1.display();

    box3.display();   
    box4.display();
    pig2.display();
    log2.display();
 
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}