function login(){
    var correo,pass
    correo=document.getElementById("email").value;
    pass=document.getElementById("password").value;
    if(correo=="sarangosanchezj@gmail.com" && pass=="123456"){
        window.location = "menu.html";
        return true;
    }else{
       alert("Datos incorrectos");
       return false;
    }
}