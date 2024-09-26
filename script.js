const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.querySelectorAll('.glitch').forEach(el => {
  setInterval(() => {
    const glitch = Math.random() > 0.5 ? 'visible' : 'hidden';
    el.style.visibility = glitch;
  }, 100);
});


const matrixChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, index) => {
    const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    const x = index * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.95) {
      drops[index] = 0;
    }
    drops[index]++;
  });
}

setInterval(drawMatrix, 30);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
