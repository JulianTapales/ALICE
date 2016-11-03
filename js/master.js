var canvas = $("#main")[0]
var ctx = canvas.getContext("2d");

function random(){
  return Math.random()*1000
}

for(i=1; i<=40; i++){
  // ctx.fillStyle = "green";
  // ctx.fillRect(random(), random(), random(), random());

  ctx.beginPath();
  ctx.moveTo(random(),random());
  ctx.lineTo(random(), random());
  ctx.stroke();
}
