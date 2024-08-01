
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('joj')
    data = localStorage.getItem("userData");
    form = document.getElementById("form");
    var user;
    data_json = data ? JSON.parse(data) : [];
    for (let i = 0; i < data_json.length; i++) {
        if(data_json[i].status === "logged in"){
            form.innerHTML = `<h1>Already logged in</h1> <p class="log-out text-muted" style="cursor:pointer""> logout?</p>`   
            user = i
            
        }
    }



    logout = document.querySelector(".log-out");
    if (logout) {
        logout.addEventListener("click", function() {
            console.log('nice');
            data_json[user].status = "logged out";
            localStorage.setItem("userData", JSON.stringify(data_json));
            location.reload();
        }
    )
        console.log("added")
    ;
    }else{
        console.log("it dosent exist")
    }

})
submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    errors = document.getElementById("errors");

    data = localStorage.getItem("userData");
    data_json = data ? JSON.parse(data) : [];
    console.log(data_json)
    console.log(username, password,hash(password))

    for (let i = 0; i < data_json.length; i++) {
        if(data_json[i].username === username && data_json[i].password === hash(password)){
            console.log("logged in");
            data_json[i].status = "logged in";
            localStorage.setItem("userData", JSON.stringify(data_json));
            location.reload()
        }
    }
    
    errors.innerHTML = "Invalid username or password"
    



})




const hash = (password) => {
    let hash = 10241;
    for (let i = 0; i < password.length; i++) {
        hash = (hash * 33) ^ password.charCodeAt(i);
    }
    return hash >>> 0; 
}