const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

//handle mouse

const mouse = {
  x: null,
  y: null,
  radius: 150,
};

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

ctx.fillStyle = 'white';
ctx.font = '25px Verdana';
ctx.fillText('DEVVINE', 0, 40);
const textCoordinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

const init = () => {
  particleArray = [];
  for (let i = 0; i < 1000; i++) {
    particleArray.push(
      new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      )
    );
  }
};

init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
  }
  requestAnimationFrame(animate);
}
animate();
