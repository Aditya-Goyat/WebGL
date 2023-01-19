function InitFun(){

    var canvas = document.querySelector("#mycanvas")

    var ctx = canvas.getContext("2d")

    // Draw the vertical line of "A"
    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.lineTo(200, 50);
    ctx.lineTo(350, 450);
    ctx.stroke();

    // Draw the horizontal line of "A"
    ctx.beginPath();
    ctx.moveTo(115, 270);
    ctx.lineTo(280, 270);
    ctx.stroke();

// Draw the letter "G" right arc
ctx.beginPath();
ctx.arc(500, 230, 175, 1.5 * Math.PI, 0, true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(650, 230);
ctx.lineTo(700, 230);
ctx.stroke();

    // Draw the letter "O"
    var x = 700, y = 600;
    // Draw the letter "O" top horizontal line
    ctx.beginPath();
    ctx.moveTo(750, 100);
    ctx.lineTo(950, 100);
    ctx.stroke();

    // Draw the letter "O" bottom horizontal line
    ctx.beginPath();
    ctx.moveTo(750, 400);
    ctx.lineTo(950, 400);
    ctx.stroke();

    // Draw the letter "O" left vertical line
    ctx.beginPath();
    ctx.moveTo(750, 100);
    ctx.lineTo(750, 400);
    ctx.stroke();

    // Draw the letter "O" right vertical line
    ctx.beginPath();
    ctx.moveTo(950, 100);
    ctx.lineTo(950, 400);
    ctx.stroke();
}