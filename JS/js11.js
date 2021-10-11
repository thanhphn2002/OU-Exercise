function xuly()
{
    var countWord = 0;
    var countChar = 0;

    var x = document.getElementById("a").value;
    var countChar = x.length;
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

    var str = ar.join(" ");
    str = str.toUpperCase();
    
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] == " ") 
            countWord++;     
    }
    countWord++;

    var ar = new Array(200).fill(0); //check letters
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "0" && str[i] <= "9")
            ar[str.charCodeAt(i)]++;
    }
    
    var rs = "Ký tự: " + countChar + '<br>' + "Từ: " + countWord + '<br>';
 
    for (let i = 48; i < ar.length; i++)
    {
        if (ar[i] != 0)
            rs += "Ký tự '" + String.fromCharCode(i) + "' : " + ar[i] + '<br>';
    }
    document.getElementById('kq').innerHTML = rs;
}   