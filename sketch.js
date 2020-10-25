var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if(movingfixedRect(movingRect,fixedRect)) {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  
  drawSprites();
}

function movingfixedRect(a,b) {
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2) {
  return true;
}
  else{
    return false;
}
}