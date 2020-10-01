document.onkeydown = detectKey;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 3;
var dy = -3;

b1 = document.getElementById('Balk1')
b1.style.position = "relative";
b1.style.top = "350px";
function detectKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        moveUp();
    } else if (e.keyCode == '40') {
        moveDown();
    }
}

function moveUp() {
    b1.style.top = parseInt(b1.style.top) - 10 + 'px';
}

function moveDown() {
    b1.style.top = parseInt(b1.style.top) + 10 + 'px';
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

function balkdetectie() {
    if (dx == b1) {

    }
}



setInterval(draw, 10);