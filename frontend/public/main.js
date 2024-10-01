"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const background = new Image();
background.src = "assets/images/Environment.png";

//TODO Create GameObject object
//TODO Create sprite object:
//image, sprite size x and y, origin x and y, animations{}
//TODO create spriteAnimation object:
//name, frames[], speed
//Commit
function newGameObject(sprite, posX, posY) {
  return { sprite, posX, posY };
}
function newSprite(imageUrl, sizeX, sizeY, cellX, cellY) {
  let newImage = new Image();
  newImage.src = imageUrl;
  return {
    image: newImage,
    sizeX,
    sizeY,
    cellX,
    cellY,
    scale: 1,
    animations: {},
  };
}
function newSpriteAnimation(name, frames, speed) {
  return { name, frames, speed };
}

function drawObject(go) {
  ctx.drawImage(
    go.sprite.image,
    go.sprite.sizeX * go.sprite.cellX,
    go.sprite.sizeY * go.sprite.cellY,
    go.sprite.sizeX,
    go.sprite.sizeY,
    go.posX,
    go.posY,
    go.sprite.sizeX * go.sprite.scale,
    go.sprite.sizeY * go.sprite.scale
  );
}
const playerBottom = newGameObject(
  newSprite("assets/images/CharacterSheet.png", 32, 32, 0, 0),
  0,
  0
);
function render() {
  //Clear
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawObject(playerBottom);

  requestAnimationFrame(render);
}
render();
console.log(playerBottom);
