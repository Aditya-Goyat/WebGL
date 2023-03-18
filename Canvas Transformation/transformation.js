function LoadBody(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xSlider = document.getElementById("xSlider");
    var ySlider = document.getElementById("ySlider");
    var xPos = 0;
    var yPos = 0;

    xSlider.oninput = function() {
      xPos = this.value;
      updateCanvas();
    }

    ySlider.oninput = function() {
      yPos = this.value;
      updateCanvas();
    }

    function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(1, 0, 0, 1, xPos, yPos);

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
    }

    updateCanvas();
}