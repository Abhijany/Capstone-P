function update() 
{
    window.location = "update.html";
}
function logout() 
{
    localStorage.removeItem("user_name");
    window.location = "login.html";
}

name = localStorage.getItem("name");
address = localStorage.getItem("address");
perimeter = localStorage.getItem("perimeter");
area = localStorage.getItem("area");
phone = localStorage.getItem("phone");

name_tag = "<h2>Name : " + name + "</h2>";
address_tag = "<h3>Address : " + address + "</h3>";
phone_no = "<h3>Phone Number : " + phone + "</h3>";
area_tag = "<h3>Area of the Plot : " + area + "</h3>";
perimeter_tag = "<h3>Perimeter of the Plot" + perimeter + "</h3><hr>";
row = name_tag + address_tag + phone_no + area_tag + perimeter_tag;
document.getElementById("lands").innerHTML = row;