const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, player, ground, obstacle, obstacleArr, monster, monsterArr;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  player = new Player();
  ground = new Ground(width/2, 380, width*2, 40);


  /*
  sword = Bodies.rectangle(200, 200, 20, 50);
  World.add(world, sword);

  
  swordHand = Constraint.create({
    bodyA: player.body,
    bodyB: sword,
    stiffness: 0.1,
    length: 5
  })

  World.add(world, swordHand);
  */ 

  obstacleArr = [];
  monsterArr = [];

  //swordHand = new Constraint1(player.body, sword);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  player.jump();

  /*
  rectMode(CENTER);
  rect(sword.position.x, sword.position.y, 20, 50);
  */

  if (frameCount % 60 === 0){
    obstacle = new Obstacle();
    obstacleArr.push(obstacle);
  }

  if (frameCount % 100 === 0){
    monster = new Enemy();
    monsterArr.push(monster);
  }


  if (obstacle != undefined){

    for (let i = 0; i < obstacleArr.length; i++) {

      var o = obstacleArr[i];
      if (o != undefined){
        o.display();
        detectCollision(player, o, i);
      }
      
    }
    
  }

  if (monster != undefined){

    for (let i = 0; i < monsterArr.length; i++) {

      var m = monsterArr[i];
      if (m != undefined){
        m.display();
        //detectCollision(player, m, i);
      }
      
    }
    
  }

  player.display();
  ground.display();

}

/*
function keyPressed(){
  if (keyDown("e")){
   
  }
}
*/

function detectCollision(player, obs, i){
	obsPosition = obs.body.position;
	PlayerPosition = player.body.position;


	var distance = dist(obsPosition.x, obsPosition.y, PlayerPosition.x, PlayerPosition.y)

	if (distance < obs.width + player.width){
    player.health -= 1;

    World.remove(world, obs.body);
    delete obstacleArr[i]
    

    console.log(obs.body);
  }
  
  console.log(player.health);
}

