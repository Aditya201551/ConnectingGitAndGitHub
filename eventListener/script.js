var headOne=document.querySelector("#one");
var headTwo=document.querySelector("#two");

headOne.addEventListener('mouseover',function(){
    headOne.textContent="Mouse Over Me!";
    headOne.style.color="Red";
});

headOne.addEventListener('mouseout',function(){
    headOne.textContent="Hover Over Me!";
    headOne.style.color="black";
});

headTwo.addEventListener('click',function(){
    if(headTwo.textContent=="Click Me")
    {
    headTwo.textContent="Click Me Again!";
    headTwo.style.color="Green";
    }
    else
    {
        headTwo.textContent="Click Me";
        headTwo.style.color="black";
    }
});

// headTwo.addEventListener("dblclick",function(){
//     headTwo.textContent="Click Me";
//     headTwo.style.color="black";
// });