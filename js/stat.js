// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
var bar_height = 150;

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(150, 20, 420, 270);

  ctx.fillStyle = "#26C6DA";
  ctx.fillRect(140, 10, 420, 270);

  ctx.textBaseline = "hanging";
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "#F5F5F5";

  ctx.fillText("Ура вы победили! ", 270, 16);
  ctx.fillText(" Список результатов:", 250, 40);

  console.log(names, times);
  // ctx.shadowColor = "red";
  // ctx.shadowOffsetX = 10;
  // ctx.shadowOffsetY = 10;

  // ctx.textBaseline = "hanging";
  // ctx.font = "16px PT Mono";
  // ctx.fillStyle = "#000";
  // ctx.fillText("ви", 200, 300);
  console.log(names[1]);
};
