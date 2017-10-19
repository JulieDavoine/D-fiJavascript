
function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    ctx.fillStyle = "red";
  
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(150, 150);
    ctx.bezierCurveTo(60, 70, 60, 70, 70, 150);
    ctx.lineTo(30, 30);
    ctx.fill();
  }
     