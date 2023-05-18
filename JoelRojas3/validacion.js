function login (){
    var correo,pass
    correo=document.getElementById('email').value; 
    pass=document.getElementById('password').value;
    if (correo == "regaloyt334@gmail.com" && pass == "12345"){
        window.location("menu.html");

    }else{
        alert("datos incorrectos");
    }

}

