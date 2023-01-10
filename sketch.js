
var bunny, bunnyImg;
var backgroundImg;
var carrotImg;
var carrotGroup, carrot;
var score = 0;
var rocksImg, treeImg, gameOverImg, gameOver;

function preload(){
  backgroundImg = loadImage("Background.jpeg");
  bunnyImg = loadImage("bunny.png")
  carrotImg = loadImage("carrotR.png")
  rocksImg = loadImage("rocks1R.png")
  treeImg = loadImage("treeTrunkR.png")
  gameOverImg = loadImage("gameOver1.png")


}

function setup(){
  createCanvas(800,600);
  
  bunny = createSprite(50, 550, 50,50 )
  bunny.addImage("bunny", bunnyImg)
  bunny.scale = 0.4
}

function draw(){

}