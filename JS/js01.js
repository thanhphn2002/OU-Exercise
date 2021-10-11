function xuly()
{
    var userName = document.getElementById("user").value;
    var temp = document.getElementById("userYear").value;
    var n = parseInt(new Date().getFullYear());
    var age = n - parseInt(temp);
    document.getElementById("rs").innerHTML = 
    ("Chào bạn " + userName + "<br>" + "Năm nay bạn " + age + " tuổi!");
}