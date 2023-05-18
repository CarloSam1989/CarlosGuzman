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
    if(fecha=="" || sex== ""){
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



