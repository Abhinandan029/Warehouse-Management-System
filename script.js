console.log("hii");

document.getElementById("login").onclick = function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "Abhi" &&  password =="2903") {
        document.getElementById("message").textContent = "You are logged in.";
        document.getElementById("allow").textContent = "continue →";
        console.log("ok");
    }
    else if (username != "Abhi" || password != "2903"){
        document.getElementById("message").textContent = "Incorrect username or password!!!!";
    }
    else {
        document.getElementById("message").textContent = "Something went wrong";
    }
}