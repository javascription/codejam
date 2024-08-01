login = document.getElementById("nav_login");

document.addEventListener('DOMContentLoaded', function() {
    console.log("nav")

    data = localStorage.getItem("userData");
    
    var user;
    data_json = data ? JSON.parse(data) : [];
    for (let i = 0; i < data_json.length; i++) {
        if(data_json[i].status === "logged in"){
           
            user = data_json[i]
            
        }
    }
    console.log("nav_login")

    login.innerHTML = user ? "Welcome " + user.username : "Login"
})