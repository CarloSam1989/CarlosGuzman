function validar(){
    var name,email,password;
    name = document.getElementById('nombre');
    email = document.getElementById('email');
    password = document.getElementById('password');
    if (name.value == "" ){
        if(email.value==""){
            if(password.value==""){
                alert("asegurese de llenar los campos ");
                return false;

            }
        }   
    }else{
        window.location = "identificaciones.html";
        return true;
       
       
    }
}