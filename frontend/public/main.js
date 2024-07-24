"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const background = new Image();
background.src = "assets/images/Environment.png";

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
background.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
