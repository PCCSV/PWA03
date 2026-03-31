let canvas = document.getElementById("signature");

let ctx = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => (drawing = true));

canvas.addEventListener("mouseup", () => (drawing = false));

canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = 2;

  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();
}

function getSignature() {
  return canvas.toDataURL();
}
