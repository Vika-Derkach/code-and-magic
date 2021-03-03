// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
// var bar_height = 150;
(function () {
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

    ctx.font = "16px PT Mono";
    ctx.fillStyle = "#000";

    var highTime = 9000;
    var highBar = 150;

    const startMargin = 170;
    const marginBetweenBlock = 80;
    let colorGraph = [
      "#7CB342",
      "#303F9F",
      "#D81B60",
      "#00BCD4",
      "#CDDC39",
      "#4DD0E1",
    ];

    for (let i = 0; i < times.length; i++) {
      let barHeight = (times[i] * highBar) / highTime;
      console.log(barHeight);
      ctx.textBaseline = "hanging";
      ctx.font = "16px PT Mono";
      ctx.fillStyle = "#F5F5F5";
      ctx.fillText(names[i], startMargin + marginBetweenBlock * i, 240);

      ctx.fillStyle = colorGraph[Math.floor(Math.random() * colorGraph.length)];
      ctx.fillRect(
        startMargin + marginBetweenBlock * i,
        225,
        40,
        -1 * barHeight
      );
    }

    // ctx.fillRect(170, 155, 40, 155 - barHeight);
    // ctx.fillRect(250, 155, 40, 155 - barHeight);
    // ctx.fillRect(330, 155, 40, 155 - barHeight);
    // ctx.fillRect(410, 155, 40, 155 - barHeight);
  };
})();
