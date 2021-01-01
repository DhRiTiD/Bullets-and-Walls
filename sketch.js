//create requited variables
var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  //random thickness, speed and weight
  speed = random(223 , 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  //bullet
  bullet = createSprite(45, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "PURPLE";

  //wall
  wall = createSprite(1200, 200, thickness, height/4);
  wall.shapeColor = "Brown";
}

function draw() {
  background(0);  

  //writing the algorithm for the function "hasCollided"
  //change the color of the wall according to the damage done
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;

    //damage
    var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
    
    if(damage>10){
      wall.shapeColor=color(225, 0, 0);
    }
    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }
  }

  //display text as Speed and Damage
  fill ("white");
  text ("SPEED : " + speed , 20, 100);
  text ("DAMAGE : " + damage , 20, 300);
  
  //display output
  drawSprites();
}

//hasCollided function
function hasCollided(Lbullet, Lwall){

  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }  
    return false;
  }