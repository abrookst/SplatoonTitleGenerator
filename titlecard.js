function refreshImage(){
    
    var canvas = document.getElementById("TCGN");
    var ctx = canvas.getContext("2d");
    
    ctx.strokeStyle = "#181818";
    ctx.fillStyle = "#181818";
    ctx.beginPath();
    ctx.roundRect(10, 10, 200, 200, 25);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(220, 10, 170, 40, 50);
    ctx.stroke();
    ctx.fill();
    
    ctx.font = "50px";
    ctx.strokeStyle = "rgb(137, 250, 53)";
    ctx.strokeText("Level ", 225, 30);

    var Username = document.getElementById('Username');
    ctx.strokeText(Username.value,10,50);
    var SFC = document.getElementById('SFC');
    ctx.strokeText(SFC.value,10,80);
    var Level = document.getElementById('Level');
    ctx.strokeText(Level.value,10,110);
    var Rank = document.getElementById('Rank');
    ctx.strokeText(Rank.value,10,140);
}