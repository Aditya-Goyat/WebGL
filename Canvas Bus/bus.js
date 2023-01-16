function InitFun(){

    var canvas = document.querySelector("#mycanvas")

    var ctx = canvas.getContext("2d")

    // Draw the bus body
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 75, 150, 100);

    // Draw the wheels
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(75, 175, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(175, 175, 25, 0, 2 * Math.PI);
    ctx.fill();

    // Draw the windows
    ctx.fillStyle = "white";
    ctx.fillRect(70, 100, 50, 50);
    ctx.fillRect(120, 100, 50, 50);

    // Draw the roof
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(50, 75);
    ctx.lineTo(150, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    // Draw the "BUS" text
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("BUS", 115, 50);
}