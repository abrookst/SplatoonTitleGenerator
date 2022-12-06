function refreshImage(){
    var canvas = document.getElementById("TCGN");
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    var Username = document.getElementById('Username');
    ctx.strokeText(Username.value,10,50);
    var SFC = document.getElementById('SFC');
    ctx.strokeText(SFC.value,10,80);
    var Level = document.getElementById('Level');
    ctx.strokeText(Level.value,10,110);
    var Rank = document.getElementById('Rank');
    ctx.strokeText(Rank.value,10,140);
}