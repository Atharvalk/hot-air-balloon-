var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6
            
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY +0.08
           spawnBottomObstacle()
           spawnTopObstacle()
        drawSprites();
        
 
}

function spawnBottomObstacle(){
  if(frameCount % 75 === 0 ){
    bottomObs = createSprite(400,320,25,25)
    bottomObs.velocityX = -3
    var i = Math.round(random(1,3))
    if(i === 1){
      bottomObs.addImage(obsBottom1)
      bottomObs.scale = 0.1
    }
    else if(i === 2){
      bottomObs.addImage(obsBottom2)
      bottomObs.scale = 0.1
    }
    else{
      bottomObs.addImage(obsBottom3)
      bottomObs.scale = 0.1
    }
  }
}

function spawnTopObstacle(){
  if(frameCount % 98 === 0 ){
    topObs = createSprite(400,40,25,25)
    topObs.velocityX = -3
    var f = Math.round(random(1,2))
    if(f === 1){
      topObs.addImage(obsTop1)
      topObs.scale = 0.1
    }
    else if(f === 2){
      topObs.addImage(obsTop2)
      topObs.scale = 0.1
    }
  }
}