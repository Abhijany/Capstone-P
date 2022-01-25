name = document.getElementById("name").value;
address = document.getElementById("address").value;
perimeter = document.getElementById("perimeter").value;
area = document.getElementById("area").value;
phone = document.getElementById("number").value;
function add() 
{
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("perimeter", perimeter);
    localStorage.setItem("area", area);
    localStorage.setItem("phone", phone);
    window.location("main_page.html");
}