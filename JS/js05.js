function xuly()
{
    var str1 = str2 = "PHAM-HOANG-NHAT-THANH";
    var ar = str1.split("");

    setInterval(xuoi, 100); 
    setInterval(nguoc, 100); 

    function xuoi() 
    {
        let ar = str1.split("");
        temp = ar.pop();
        ar.unshift(temp);
        str1 = ar.join("");
        document.getElementById("xuoi").innerHTML = str1;
    }

    function nguoc() 
    {
        let ar = str2.split("");
        temp = ar.shift();
        ar.push(temp);
        str2 = ar.join("");
        document.getElementById("nguoc").innerHTML = str2;        
    }
}

