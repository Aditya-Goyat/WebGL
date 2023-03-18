function onLoad(){
    var canvas = document.querySelector("#mycanvas");
    var ctx = canvas.getContext("2d");
    var x = 200;

    ctx.fillStyle = "#d90000";
    ctx.fillRect(30, 40, 300, 70);
    ctx.fillStyle = "#000080";
    ctx.fillRect(30, 110, 300, 70);
    ctx.fillStyle = "#4cc7fc";
    ctx.fillRect(30, 180, 300, 70);

    

    // Draw pedestal
    ctx.fillStyle = "gray";
    ctx.fillRect(100 + x, 560, 300, 40);
    ctx.stroke();
    ctx.fillRect(150 + x, 520, 200, 40);
    ctx.stroke();

    // Draw pole
    ctx.fillStyle = "brown";
    ctx.fillRect(250 + x, 40, 10, 480);

    // Draw flag
    ctx.fillStyle = "orange";
    ctx.fillRect(260 + x, 40, 300, 70);
    ctx.fillStyle = "white";
    ctx.fillRect(260 + x, 110, 300, 70);
    ctx.fillStyle = "green";
    ctx.fillRect(260 + x, 180, 300, 70);

    // Draw Ashoka Chakra
    ctx.beginPath();
    ctx.arc(410 + x, 145, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    
}