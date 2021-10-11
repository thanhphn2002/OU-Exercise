function ve()
{
    var canvas = document.getElementById("drawing");
    var draw = canvas.getContext("2d");

    // Vuông xanh
    draw.fillStyle = "cyan";
    draw.fillRect(0, 0, 500, 500);

    // Tròn trên
    var grd1 = draw.createLinearGradient(0, 0, 0, 250);
    grd1.addColorStop(0, "red");
    grd1.addColorStop(1, "white");
    draw.fillStyle = grd1;
    draw.beginPath();
    draw.arc(250, 250, 250, 0, Math.PI, true);
    draw.fill();
    draw.stroke();

    // Tròn dưới
    var grd2 = draw.createLinearGradient(0, 250, 0, 500);
    grd2.addColorStop(0, "white");
    grd2.addColorStop(1, "red");
    draw.fillStyle = grd2;
    draw.beginPath();
    draw.arc(250, 250, 250, 0, Math.PI);
    draw.fill();
    draw.stroke();

    // Vuông vàng
    draw.beginPath();
    draw.lineWidth = "3";
    draw.strokeStyle = "red";
    draw.moveTo(1, 249);
    draw.lineTo(249, 1);
    draw.lineTo(499, 249);
    draw.lineTo(249, 499);
    draw.lineTo(1, 249);
    draw.strokeStyle = "red";
    draw.stroke();
    draw.fillStyle = "yellow";
    draw.fill();

    draw.beginPath();
    draw.lineWidth = "3";
    draw.font = "1000 100px tahoma";
    draw.strokeStyle = "blue";
    draw.strokeText("HTML5", 85, 280);
}