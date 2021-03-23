var gameState = 0 ;
var playerCount;

var canvas, backgroundImg;

var form, player, game;

var  database;



function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);

  }

function draw(){
  background("white");
  
    drawSprites();
  
}

