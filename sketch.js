const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(500,20,2)
    rubber2 = new Rubber(500.10,20,2)
    rubber3 = new Rubber(500.20,20,2)
    rubber4 = new Rubber(500.30,20,2)
    rubber5 = new Rubber(500.40,20,2)
    rubber6 = new Rubber(500.50,20,2)
    rubber7 = new Rubber(500.60,20,2)
    rubber8 = new Rubber(500.70,20,2)
    rubber9 = new Rubber(500.80,20,2)
    rubber10 = new Rubber(500.90,20,2)
    stone1 = new Stone(400,30);
    iron1=new Iron(560,30)
    
}


function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    stone1.display();
    iron1.display();
}