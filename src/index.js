const draw = () => {
  const canvas = document.getElementById('canvas');

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10, 10, 55, 50);
};

const ready = () => {
  draw();
};

document.addEventListener('DOMContentLoaded', ready, false);
