function xuly()
{
    var nen = document.getElementById("bg").value;
    var chu = document.getElementById("tx").value;
    var content = document.getElementById("inp").value;
    
    document.getElementById("rs").style.background = nen;
    document.getElementById("rs").style.color = chu;
    document.getElementById("rs").innerHTML = content;
}