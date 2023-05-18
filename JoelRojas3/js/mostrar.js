function mostrarDatos(nombre, email, password) {
    // Crear un objeto FormData y agregar los datos
    var formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("password", password);

    // Redirigir a identificaciones.html con los parámetros en la URL
    window.location.href = "identificaciones.html? " + new URLSearchParams(formData).toString();
}