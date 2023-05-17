function login(){
    const Swal = require('sweetalert2')
    var correo,pass
    correo=document.getElementById("email").value;
    pass=document.getElementById("password").value;
    if(correo=="carlosgh89@hotmail.com"&&pass=="123456"){
        window.location("menu.html");
    }else{
       alert("Datos incorrectos");
    }
}