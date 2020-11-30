var fixedRect,movingRect;
var gameObject
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
gameObject=createSprite(150,200,60,50);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject)){
    movingRect.shapeColor="red"
    gameObject.shapeColor="red"
    gameObject.velocityX=1;
  }
  else{
    movingRect.shapeColor="green"
    gameObject.shapeColor="green"
  }

  drawSprites();
}
