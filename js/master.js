var canvas = $("#main")[0]
var ctx = canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.lineWidth = 0.1;

function render(){
  function Point(x, y){
    var o = this;
    o.x = x;
    o.y = y;
    return this
  }

  function random(){
    var r = Math.random()
    function ball(){ return 0.25*(Math.random()+Math.random()+Math.random()+Math.random()) }
    function diagonal() {return (Math.random()+Math.random())}
    function normal() { return Math.random() }
    function bigDiagonal(){return  Math.max(Math.random(), Math.random())}

    //return (0.2*ball()+diagonal()+10*normal())/12
    return normal()
  }

  function randomPoint(){
    return new Point(random()*ctx.canvas.width, random()*ctx.canvas.height)
  }

  var currentLines = []

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for(i=1; i<=8000; i++){
    // ctx.fillStyle = "green";
    // ctx.fillRect(random(), random(), random(), random());

    var start = randomPoint()
    var end = randomPoint()

    currentLines.push({start: start, end: end})

    //ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  window.requestAnimationFrame(render);
}

render()
// window.requestAnimationFrame(render);
