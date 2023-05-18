const movPag= document.querySelector(".movPag");
const btn_adelante2= document.querySelector(".sigPag");
const btn_atras1= document.querySelector(".volver-pag1");
const btn_adelante3= document.querySelector(".adelante-pag3");
const btn_atras2= document.querySelector(".volver-pag2");
const btn_adelante4= document.querySelector(".adelante-pag4");
const btn_atras3= document.querySelector(".volver-pag3");
const btn_final= document.querySelector(".fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max=4;
let cont=1;


btn_adelante2.addEventListener("click",function(e){
    var nombre = document.getElementById("nombres").value;
    var ape = document.getElementById("apellidos").value;
    var iden= document.getElementById("identificacion").value;
    if(nombre=="" || ape=="" || iden==""){
      /* document.getElementById("nombres-error").innerHTML = "*Esto no puede estar vacío"; */
       alert("No puede quedar vacío.");
       return false;
    }else{
        e.preventDefault();
        movPag.style.marginLeft="-25%"
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        index += 1;
    }
});
btn_adelante3.addEventListener("click",function(e){
    var fecha = document.getElementById("fehcanac").value;
    var sex = document.getElementById("sexo").value;
    if(fecha=="" || sex== "-1"){
      /* document.getElementById("nombres-error").innerHTML = "*Esto no puede estar vacío"; */
       alert("No puede quedar vacío.");
       return false;
    }else{
        e.preventDefault();
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;
        movPag.style.marginLeft="-50%"
        return false;
    }
});
btn_adelante4.addEventListener("click",function(e){
    var ccgmail = document.getElementById("correo").value;
    var cctelefono = documento.getElementById("telefono").value;
    if(ccgmail =="" || cctelefono==""){
        alert("No puede quedar vacio.");
        return true;
    }else{
        e.preventDefault();
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;
        movPag.style.marginLeft="-75%"
        return false;

    }
});

btn_adelante3.addEventListener("click",function(e){
    e.preventDefault();
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
    
});
btn_adelante4.addEventListener("click",function(e){
    e.preventDefault();
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
    movPag.style.marginLeft="-75%"
});
btn_final.addEventListener("click",function(e){
    e.preventDefault();
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
    alert("Fin de registro");
});
btn_atras1.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft="0%"
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras2.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft="-25%"
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras3.addEventListener("click",function(e){
    e.preventDefault();
    movPag.style.marginLeft="-50%"
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});


/*
const nextButton = document.querySelector("#btn_adelante2");
nextButton.addEventListener("click", function(e) {
  const nombre= document.querySelector("nombres").value;
  const surname = document.querySelector("apellidos").value;
  const id = document.querySelector("identificacion").value;
  if (name === "" || surname === "" || id === "") {
    alert("No puede quedar vacío.");
    return true;
  } else {
    e.preventDefault();
    const page = document.querySelector("#movPag");
    page.style.marginLeft = "-25%";
    const num = document.querySelectorAll(".num");
    const progressText = document.querySelectorAll(".progressText");
    const progressCheck = document.querySelectorAll(".progressCheck");
    let index = 0;
    num[index].classList.add("active");
    progressText[index].classList.add("active");
    progressCheck[index].classList.add("active");
    index += 1;
  }
});
*/


