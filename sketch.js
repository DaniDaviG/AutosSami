var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game; 

var cars, car1, car2, car3, car4, track;
var car1Img, car2Img, car3Img, car4Img, trackImg;
var backgroundImage;

function preload(){
    trackImg = loadImage("track.jpg");
    car1Img = loadImage("car1.png");
    car2Img = loadImage("car2.png");
    car3Img = loadImage("car3.png");
    car4Img = loadImage("car4.png");
    backgroundImage = loadImage("ground.png");  
}
  

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}

