var bg,snowFlake,snowFlakeImg;
function preload(){
  bg=loadImage("snow3.jpg");
  snowFlakeImg=loadImage("snow5.webp");

}

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  snow() 
  drawSprites();
}
function snow(){
if(frameCount%10===0){
  snowFlake=createSprite(random(0,800),0,50,50);
  snowFlake.velocityX=-2;
  snowFlake.velocityY=4;
  snowFlake.addImage(snowFlakeImg);
  snowFlake.scale=0.1
}

}


