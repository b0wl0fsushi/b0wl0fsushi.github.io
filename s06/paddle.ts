namespace s6moving{
    let board = document.querySelector('#board') as HTMLCanvasElement
    let ctx = board.getContext('2d')

    let ballX = 400;
    let ballY = 300;
    let ballDx = -10
    let ballDy = -10

    function drawBall() {
        ctx.beginPath();
        ctx.arc(ballX, ballY, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "#0095DD"
        ctx.fill();
        ctx.closePath();
    }

    let paddleX = board.width / 2
    let paddleW = 1000;
    let paddleH = 20;
    function drawPaddle(){
        ctx.beginPath();
        ctx.rect(paddleX-paddleW/2, 580, paddleW, paddleH);
        ctx.fillStyle= "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    let leftPressed = false;
    let rightPressed = false;
    window.onkeydown = (evt) => {
        if (evt.keyCode == 37){
            leftPressed = true;
        }
        else if (evt.keyCode == 39){
            rightPressed = true;
        }
    };

    window.onkeyup = (evt) => {
        if (evt.keyCode == 37){
            leftPressed = false;
        }
        
        else if( evt.keyCode == 39){
            rightPressed = false;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, board.width, board.height);
        drawBall();
        drawPaddle();
        if (ballX < 0 || ballX > 800) {
            ballDx *= -1;
        }

        if (ballY > 600 || ballY < 0){
            ballDy *= -1;
        }

        if (ballY > 570) {
            if (ballX > paddleX - paddleW/2 && ballX < paddleX + paddleW/2) {
                ballDy *= -1;
            }
        else {
            alert ("Game Over");
            window.clearInterval(gameLoop)
        }
        }
        ballX += ballDx
        ballY += ballDy 

        if(leftPressed == true){
            paddleX -= 10
        }
        else if(rightPressed == true){
            paddleX += 10
        }
    }

    let gameLoop = window.setInterval(draw, 30);
}