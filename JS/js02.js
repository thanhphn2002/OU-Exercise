function xuly()
{
    var userName = prompt("Nhập tên", "Nguyễn Văn Ân");
    var temp = prompt("Nhập năm sinh", "2002");
    var n = parseInt(new Date().getFullYear());
    var age = n - parseInt(temp);

    document.write
    ("Chào bạn " + "<b>" + userName + "</b>" + "<br>" + "Năm nay bạn " + "<b>" + age  + " tuổi!" + "</b>"
    + "<br>" + "<h3>" + "<a href='javascript.html'>" + "Danh sách bài tập Javascript" + "</a>" + "</h3>");
}
