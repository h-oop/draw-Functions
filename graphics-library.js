let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
//
function stroke(style) {
  ctx.strokeStyle = style;
}
function fill(style) {
  ctx.fillStyle = style;
}
function lineWidth(width) {
  ctx.lineWidth = width;
}


//DDRAW LINE
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); //endpoint 1
  ctx.lineTo(x2, y2); //endpoint 2
  ctx.stroke();
}

//Crik withc center x,y and radius r
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

function drawStickman(x, y, color, width) {
  stroke(color);
  lineWidth(width);
  circle(x + 20, y + 20, 20, "stroke"); //head
  line(x + 20, y + 40, x + 20, y + 80); //body
  line(x, y + 70, x + 20, y + 50); // Left Arm 
  line(x + 40, y + 70, x + 20, y + 50); // Right Arm
  line(x, y + 110, x + 20, y + 80); // Left Leg
  line(x + 40, y + 110, x + 20, y + 80); // Right Leg
}

function drawCore(x, y, color, width) {
  stroke(color);
  fill(color);
  lineWidth(width);
  circle(x + 30, y + 30, 30, "stroke"); //core
  circle(x + 30, y + 30, 19, "fill"); //eye
  fill("white");
  circle(x + 30, y + 30, 9, "fill"); //iris 
  lineWidth(width+3)
  line(x, y, x + 60, y); // top
  line(x, y + 60, x + 60, y + 60); // bottom
}

function drawStar(x, y, w, h, color, width) {
  stroke(color);
  lineWidth(width);
  ctx.beginPath();
  ctx.moveTo(x, y); //vertex
  ctx.lineTo(x + w, y + h); //bottom right
  ctx.lineTo(x - w * 1.3, y + h/2.5); //top left
  ctx.lineTo(x + w * 1.3 , y + h/2.5); //top right
  ctx.lineTo(x - w , y + h); //bottom left
  ctx.lineTo(x, y); //vertex
  ctx.stroke();
}