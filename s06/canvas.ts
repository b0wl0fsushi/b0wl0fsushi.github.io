namespace s6canvas{
    let board = document.querySelector('#board') as HTMLCanvasElement
    let ctx = board.getContext('2d');

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 100, false)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(160, 10, 100, 40);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.stroke();
    ctx.closePath();
}