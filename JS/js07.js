function like()
{
    var x = document.getElementById("care").value;
    return x;
}

function xuly()
{
    var tk = document.getElementById("user").value;
    var mk = document.getElementById("pwd").value;
    var birth = (document.getElementById("dob").value).split("-");
    var gt = document.getElementsByName("sex");

    var out = document.getElementById("rs");
    
    (gt[0].checked == true) ? gt = 0 : gt = 1;
    if (tk == "" || mk == "" || birth == "")
        out.innerHTML = "Bạn chưa điền đủ thông tin!";
    else
    {
        var str = "Xin chào bạn " + tk + '\n' + "Ngày sinh của bạn: " + birth[2] + "/" + birth[1] + "/" + birth[0] + '\n';
        if (gt == 0)
            str += "Giới tính: Nam" + '\n';
        else
            str += "Giới tính: Nữ" + '\n';
        str += "Mật khẩu của bạn có " + mk.length + " ký tự" + '\n' + "Vấn đề bạn quan tâm: " + like();
        out.innerHTML = str;
    }
}