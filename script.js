document.addEventListener("DOMContentLoaded", function () {
    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball");
    let paddle = document.getElementById("paddle");

    let ballX =50; //distance of the top of ball wrt ping pong able
    let ballY = 50; //distance of the left of ball wrt ping pong able

    let dx =2; //distance factor in x direction
    let dy =2; //distance factor in y direction
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
   
    setInterval(function exec(){
        ballX+=dx;
        ballY+=dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
    //     if(ballX> 700-20 || ballX <= 0) dx*=-1; //if ball hits the right or left wall, reverse the direction of ball in x direction
    //     if(ballY> 400-20 || ballY <= 0) dy*=-1; //if ball hits the bottom or top wall, reverse the direction of ball in y direction
        if(ballX< paddle.offsetLeft + paddle.offsetWidth && ballY > paddle.offsetLeft && ballY  - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight){
            // if ball hits the paddle, reverse the direction of ball in x direction
            dx*=-1;
           // console.log("hit",ballX,ballY);
        }
        if(ballX> table.offsetWidth - ball.offsetWidth || ballX <= 0) dx*=-1; //if ball hits the right or left wall, reverse the direction of ball in x direction
        if(ballY> table.offsetHeight - ball.offsetHeight || ballY <= 0) dy*=-1; //if ball hits the bottom or top wall, reverse the direction of ball in y direction

    }, 1);

    let paddleY = 0;
    let dPy =10; //distance factor in y direction
    document.addEventListener("keydown", (event)=> {
        event.preventDefault(); //to prevent the default action of the key pressed
        if(event.keyCode == 38 && paddleY > 0){
            // ip arrow
            paddleY +=(-1)*dPy;
            console.log("up", paddleY);
        }else if(event.keyCode ==40 && paddleY < table.offsetHeight - paddle.offsetHeight){
            // down arrow
            paddleY += dPy;
            console.log("down", paddleY);
        }
        paddle.style.top= `${paddleY}px`;
    })
})