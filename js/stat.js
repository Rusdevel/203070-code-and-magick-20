'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, time) {

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white');


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillText('Вы', 160, 250);
  ctx.fillRect(150, 80, 40, 150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Миша', 240, 250);
  ctx.fillRect(240, 80, 40, 150);

  ctx.fillStyle = 'blue';
  ctx.fillText('Люба', 330, 250);
  ctx.fillRect(330, 80, 40, 150);
};
