var ar = [""];


function init()
{
    ar = [""];
    var x = document.getElementById("ptu").value;

    if (x == 0 || undefined)
        out.innerHTML = "Không thể tạo mảng (Điều kiện: phần tử > 0)";
    else
    {
        for (let i = 0; i < x; i++)
            ar[i] = Math.floor(Math.random() * 100) + 1;

        document.getElementById("rs").innerHTML = ar.join(" ");
    }
    return str;
}

function sortUp()
{
    ar.sort(function(a, b){return a - b});
    document.getElementById("up").innerHTML = ar.join(" ");
}

function sortDown()
{
    ar.sort(function(a, b){return b - a});
    document.getElementById("down").innerHTML = ar.join(" ");
}