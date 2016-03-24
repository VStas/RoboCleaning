'use strict';

//
// Use grid system, but make smooth animations between cells.
// Implement batteries and charging stations.
//

// import ROOM_WIDTH, ROOM_HEIGHT

const draw = () => {
  const canvas = document.getElementById('canvas');

  const context = canvas.getContext('2d');
  drawRoom(context);
};

const drawRoom = (context) => {
  context.rect(10, 10, 10 + ROOM_WIDTH, 10 + ROOM_HEIGHT);
  context.lineWidth = 1;
  context.stroke();
};

const ready = () => {
  draw();
};

document.addEventListener('DOMContentLoaded', ready, false);
