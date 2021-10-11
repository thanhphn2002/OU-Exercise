function xuly(a)
{
    if (a.value == 1)
    {
        document.getElementById("h-styled").style.color = "red";
        document.getElementById("styled").style.color = "yellow";
        document.getElementById("styled").style.background = "blue";
        document.getElementById("styled").style.fontWeight = "bolder";
    }
    else
    {
        document.getElementById("h-styled").style.color = "black";
        document.getElementById("styled").style.color = 'black';
        document.getElementById("styled").style.background = "none";
        document.getElementById("styled").style.fontWeight = "normal";
    }
        
}