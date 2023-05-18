function login() {
  var correo = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if (correo === "" && pass === "") {
      alert("No deje campos en blanco");
  } else if (correo === "gato23_@gmail.com" && pass=="123456") {
      window.location.href = "menu.html";
      return true;
  } else {
      alert("Datos incorrectos");
      return false;
  }
}
