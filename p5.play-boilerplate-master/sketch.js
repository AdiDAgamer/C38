
var database;
//var playerName, playerIndex;
var player;
var form;
var playerCount = 0;
var gameState = 0;
var player_1, player_2;
var players = [player_1, player_2];
var game;

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  //form = new Form();
  game = new Game();
  game.getState();
  game.start();
}

function draw() 
{
  //background(255);  
  //form.display()
}