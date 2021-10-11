function xuly()
{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let kq = document.getElementById("rs");
    if (a == 0)
        kq.innerHTML = ("MATH ERROR");
    else
    {
        denta = b * b - 4 * c * a;   
        
        if (denta < 0) 
            kq.innerHTML = ("VÔ NGHIỆM");
        else if (denta == 0)
        {
            kep = -b / (2 * a);
            kq.innerHTML = ("X" + "<sub>" + 1 + "</sub>" + " = X" + "<sub>" + 2 + "</sub>" + " = " + kep);
        }    
        else
        {
            x1 = (-b + Math.sqrt(denta)) / (2 * a);
            x2 = (-b - Math.sqrt(denta)) / (2 * a);
            kq.innerHTML = ("X" + "<sub>" + 1 + "</sub>" + " = " + x1.toFixed(2) 
            + " ; X" + "<sub>" + 2 + "</sub>" + " = " + x2.toFixed(2));
        }
    }
}

function del()
{
    document.getElementById("rs").innerHTML = ("KẾT QUẢ");
}
 