function xuly()
{
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var z = document.getElementById("c").value;
    
    var x = x.replaceAll(y, z);
    if (x == "" || y == "")
        alert("Fail");
    else
        document.getElementById("a").value = x;
}   