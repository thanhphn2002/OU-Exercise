function xuly(x, y)
{
    let kq = document.getElementById("rs");
    let box = document.getElementsByName("cal");

    for (let i = 0; i < box.length; i++){
        if (box[i].checked === true){
            var cal = box[i].value;
        }
    }
    cal = parseInt(cal);
    switch(cal)
    {
        case 1: res = parseInt(x) + parseInt(y);
        kq.innerHTML = (x + " + " + y + " = " + res);
        break;

        case 2: res = parseInt(x) - parseInt(y);
        kq.innerHTML = (x + " - " + y + " = " + res);
        break;

        case 3: res = parseInt(x) * parseInt(y);
        kq.innerHTML = (x + " * " + y + " = " + res);
        break;

        case 4: 
        if (y == 0)
            kq.innerHTML = ("MATCH ERROR");
        else
        {
            res = parseInt(x) / parseInt(y);
            kq.innerHTML = (x + " / " + y + " = " + res.toFixed(2));
        }      
        break;
    }
}

function del()
{
    document.getElementById("rs").innerHTML = ("KẾT QUẢ");
}
 