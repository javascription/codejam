Submit = document.getElementById("submit");


Submit.addEventListener("click", function() {
    console.log("clicked");

    

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    errors = document.getElementById("errors");

    if(!validateEmail(email)){
        errors.innerHTML = "Invalid email";
        return
    }else{
        errors.innerHTML = "";
    }

    if(!validateUsername(username)){
        errors.innerHTML = "username Taken";
        return
    }

    console.log(username, email, password);
    console.log(hash(password));

    const userData = {
        username: username,
        email: email,
        password: hash(password)
    }
    data = localStorage.getItem("userData");
    data_json = data ? JSON.parse(data) : [];
    data_json.push(userData);
    console.log(data_json)

    localStorage.setItem("userData", JSON.stringify(data_json));
    location.href = "login.html"
});


const hash = (password) => {
    let hash = 10241;
    for (let i = 0; i < password.length; i++) {
        hash = (hash * 33) ^ password.charCodeAt(i);
    }
    return hash >>> 0; 
}

const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateUsername = (username) => {
    data = localStorage.getItem("userData");
    data_json = data ? JSON.parse(data) : [];
    for (let i = 0; i < data_json.length; i++) {
        if(data_json[i].username === username){
            return false;
        }
    }
    return true;
}
