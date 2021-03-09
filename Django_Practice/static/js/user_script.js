function getRandomColor() {
  var letters = "05E1BC4D862A3F79";
  var color = "#";
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

/*function changeHeadColor()
{
    document.querySelector("h1").style.color=getRandomColor();
}*/

setInterval(function () {
  var table=document.querySelectorAll("td")

  for(var i=0;i<table.length;i++)
    table[i].style.color=getRandomColor();
}, 500);
// })