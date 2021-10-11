function reverse()
{
    var x = document.getElementById("a").value;
    var ar = x.split(" ");
    ar.reverse();

    document.getElementById("a").value = ar.join(" ");
}

function xuly()
{
    var x = document.getElementById("a").value;
    x = x.trim();
    var ar = x.split(" ");

    for (let i = 0; i < ar.length; i++) //del space
    {
        if (ar[i] == "") 
        {
            ar.splice(i,1);
            i--;
        }        
    }
 
    for (let i = 0; i < ar.length; i++)
        ar[i] = (ar[i].charAt(0)).toUpperCase() + (ar[i].slice(1, ar[i].length)).toLowerCase();     
    
    document.getElementById("a").value = ar.join(" ");
}   