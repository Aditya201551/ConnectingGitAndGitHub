function getRandomColor()
{
    var letters="0123456789ABCDEF";
    var color="#";
    for(var i=0; i<6; i++)
        color+=letters[Math.floor(Math.random()*16)];
    return color;
}

/*function changeHeadColor()
{
    document.querySelector("h1").style.color=getRandomColor();
}*/

setInterval(function () {
    document.querySelector("h1").style.color=getRandomColor();
},500);