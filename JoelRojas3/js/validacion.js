function login(){
    var correo,pass
    correo=document.getElementById("email").value;
    pass=document.getElementById("password").value;
    if(correo=="prueba@gmail.com" && pass=="12345"){ 
        window.location = "menu.html";
        return true;
    }else{
       alert("Datos incorrectos");
       return false;
    }

}
