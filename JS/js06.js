function xuly() {
    var str = "";

    for (var i = 2; i <= 9; i++) 
    {
        if (i == 2 || i == 6)
            str += "<tr>";


        for (var j = 2; j < 10; j++) 
        {
            if (j == 2)
                str += "<td>";


            str += i + " X " + j + " = " + i * j + "<br>";

            if (j == 9)
                str += "</td>";

        }

        if (i == 5 || i == 9)
            str += "</tr>";

    }
    document.getElementById("ops").innerHTML = str;
}