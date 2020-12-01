var movingrect
var fixedrect
var thirdrect
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 350, 50, 50);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
  thirdrect = createSprite(100, 100, 50, 30);
  thirdrect.shapeColor="green"
  //movingrect.velocityY=-5
}

function draw() {
  background("black");  
  movingrect.y=mouseY
  movingrect.x=mouseX
  movingrect.debug=true;
  fixedrect.debug=true;
  if(touching(movingrect,fixedrect)){
    movingrect.shapeColor="yellow"
    fixedrect.shapeColor="yellow"
  }
  else if(touching(movingrect,thirdrect)){
    movingrect.shapeColor="yellow"
    thirdrect.shapeColor="yellow"
  }
  else{
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
    thirdrect.shapeColor="green"
  }
  
  




  drawSprites();
}

