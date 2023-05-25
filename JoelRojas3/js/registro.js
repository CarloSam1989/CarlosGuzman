function validar() {
  var name, email, password;
  name = document.getElementById("nombre");
  email = document.getElementById("email");
  password = document.getElementById("password");
  if (name.value == "" || email.value=="" || password == "") {
    alert("Hay campos vacios asegurese de llenarlos");
    return false;
  } else {
   alert("Usuario Registrado");
    return true;
  }
}
