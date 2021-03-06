var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;

function draw(event) {
    if (!isDrawing) return; //stops the function from running whrn they are not moused down
    console.log(event);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    //start from
    ctx.beginPath();
    //go to
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
    hue++;
    if (hue > 360) {
        hue = 0
    };
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true
    lastX = event.offsetX;
    lastY = event.offsetY;
});


canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);