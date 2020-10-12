//Create variables here
var dog, happyDog, datbase, foodS, foodStock;
var milkAnimation;
var milk;

function preload()
{
  //load images here
  dogAnimation = loadImage("dogImg.png");
  dogAnimation2 = loadImage("dogImg1.png");
  milkAnimation = loadImage("milk.png");

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogAnimation);
  dog.scale = 0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87);

  fill("white");
  text("Press the up arrow to feed the dog", 150, 20);

  if(keyWentDown(UP_ARROW))
  {

    writeStock(foodS);
    dog.addImage(dogAnimation2);

    milk = createSprite(250, 30, 20, 20);
    milk.addImage(milkAnimation);
    milk.scale = 0.2;

    milk.velocityY = 5;

  }
  if(keyWentUp(UP_ARROW))
  {

    writeStock(foodS);
    dog.addImage(dogAnimation);

  }
  /*if(dog.y - milk.y < dog.height/2 + milk.height/2)
  {

    milk.visible = false;

  }*/

  //Milk();

  drawSprites();
  //add styles here

}

function readStock(data)
{

  foodS = data.val();

}
function writeStock(x)
{

  if(x <= 0)
  {

    x = 0;
  
  }
  else
  {

    x = x- 1;

  }

    database.ref('/').update({
    Food:x
  })

}




