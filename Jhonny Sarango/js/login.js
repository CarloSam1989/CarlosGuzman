function login(){
    var correo,pass
    correo=document.getElementById("email").value;
    pass=document.getElementById("password").value;
    if(correo=="" && pass=="")
    {
        alert("No deje campos en blanco");
       
    }else if(correo=="sarangosanchezj@gmail.com" && pass=="Jhonny_123"){
        window.location("menu.html");
    }else{
       alert("Datos incorrectos");
    }
}