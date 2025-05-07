document.addEventListener("DOMContentLoaded", function () {
    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball");

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
        if(ballX> table.offsetWidth - ball.offsetWidth || ballX <= 0) dx*=-1; //if ball hits the right or left wall, reverse the direction of ball in x direction
        if(ballY> table.offsetHeight - ball.offsetHeight || ballY <= 0) dy*=-1; //if ball hits the bottom or top wall, reverse the direction of ball in y direction

    })
})