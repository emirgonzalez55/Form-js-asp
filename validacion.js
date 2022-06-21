document.getElementById("precio").value = "200" 

function cambioprecio() {
    precio = document.getElementById("precio").value
    equipo = document.getElementById("equipo").value
    ubicacion = document.getElementById("ubicacion").value
    entradas = document.getElementById("entradas").value

    if ( equipo == "Barcelona - Ath. Bilbao" && ubicacion == "Popular Local" || equipo == "Barcelona - Ath. Bilbao" && ubicacion == "Popular Visitante") {
        total = entradas * 200;
        document.getElementById("precio").value = total
        
    }else if (equipo == "Barcelona - Ath. Bilbao" && ubicacion == "Platea Local" || equipo == "Barcelona - Ath. Bilbao" && ubicacion == "Platea Visitante"){
        total = entradas * 1000;
        document.getElementById("precio").value =  total
    }
    if( equipo == "Real Madrid - Sp. Gijón" && ubicacion == "Popular Local" || equipo == "Real Madrid - Sp. Gijón" && ubicacion == "Popular Visitante"){
        total = entradas * 150;
        document.getElementById("precio").value = total
    }else if (equipo == "Real Madrid - Sp. Gijón" && ubicacion == "Platea Local" || equipo == "Real Madrid - Sp. Gijón" && ubicacion == "Platea Visitante"){
        total = entradas * 750;
        document.getElementById("precio").value = total
    }
    if(equipo == "Dep. La Coruña – Sevilla" && ubicacion == "Popular Local" || equipo == "Dep. La Coruña – Sevilla" && ubicacion == "Popular Visitante"){
        total = entradas * 170;
        document.getElementById("precio").value = total
    }else if (equipo == "Dep. La Coruña – Sevilla" && ubicacion == "Platea Local" || equipo == "Dep. La Coruña – Sevilla" && ubicacion == "Platea Visitante"){
        total = entradas * 850;
        document.getElementById("precio").value = total
    }
}

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

emailvalido = /\w+@\w+\.+[a-z]{1,3}$/;
stringvalido = /[A-z]{1,25}$/;

const validacionesform = (v) => {
    email = document.getElementById("email").value
    confirmeemail = document.getElementById("confirmeemail").value
    switch (v.target.name) {
        case "nombre":
            if (v.target.value == "" ){
                mensajenombre = "Falta nombre"
                document.getElementById("faltanombre").innerHTML = mensajenombre;
                document.getElementById("nombre").className = "verficacion-red";
            }else if (!stringvalido.test(v.target.value)) {
                mensajenombre = "Maximo 25 caracteres/no numeros"
                document.getElementById("faltanombre").innerHTML = mensajenombre;
                document.getElementById("nombre").className = "verficacion-red";
            }else{
                mensajenombre = ""
                document.getElementById("faltanombre").innerHTML = mensajenombre;
                document.getElementById("nombre").className = "verficacion-black";
            }
            break;
        case "apellido":
            if (v.target.value == ""){
                mensajeapellido = "Falta apellido"
                document.getElementById("faltaapellido").innerHTML = mensajeapellido;
                document.getElementById("apellido").className = "verficacion-red";
            }else if (!stringvalido.test(v.target.value)) {
                mensajenombre = "Maximo 25 caracteres/no numeros"
                document.getElementById("faltaapellido").innerHTML = mensajenombre;
                document.getElementById("apellido").className = "verficacion-red";
            }else{
                mensajeapellido = ""
                document.getElementById("faltaapellido").innerHTML = mensajeapellido;
                document.getElementById("apellido").className = "verficacion-black";
            }
            break;
        case "email":
            if (v.target.value == ""){
                mensajeemail = "Falta email"
                document.getElementById("faltaemail").innerHTML = mensajeemail;
                document.getElementById("email").className = "verficacion-red";
            }else if(!emailvalido.test(v.target.value)){
                mensajeconfirmeemail = "Ingrese un email valido"
                document.getElementById("faltaemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("email").className = "verficacion-red";

            }else if (email != "" && confirmeemail != "" && email != confirmeemail  ){
                mensajeconfirmeemail = "Los email no coinciden"
                document.getElementById("faltaemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("email").className = "verficacion-red";
            }
            else{
                mensajeemail = ""
                document.getElementById("faltaemail").innerHTML = mensajeemail;
                document.getElementById("email").className = "verficacion-black";
            }
            break; 
        case "confirmeemail":
            if (v.target.value == ""){
                mensajeconfirmeemail = "Falta confirmar email"
                document.getElementById("faltaconfirmeemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("confirmeemail").className = "verficacion-red";

            }else if(!emailvalido.test(v.target.value)){
                mensajeconfirmeemail = "Ingrese un email valido"
                document.getElementById("faltaconfirmeemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("confirmeemail").className = "verficacion-red";

            }else if(email != "" && confirmeemail != "" && email != confirmeemail  ){
                mensajeconfirmeemail = "Los email no coinciden"
                document.getElementById("faltaconfirmeemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("confirmeemail").className = "verficacion-red";

            }else{
                mensajeconfirmeemail = ""
                document.getElementById("faltaconfirmeemail").innerHTML = mensajeconfirmeemail;
                document.getElementById("confirmeemail").className = "verficacion-black";
            }
            break; 
            case "entradas":
            if (v.target.value > 20){
                mensajemaxentradas = "El numero maximo es 20"
                document.getElementById("maxentradas").innerHTML = mensajemaxentradas;
                document.getElementById("entradas").className = "verficacion-red";
            }else if(v.target.value < 1){
                mensajemaxentradas = "El numero minimo es 1"
                document.getElementById("maxentradas").innerHTML = mensajemaxentradas;
                document.getElementById("entradas").className = "verficacion-red";
            }else{
                mensajemaxentradas = ""
                document.getElementById("maxentradas").innerHTML = mensajemaxentradas;
                document.getElementById("entradas").className = "verficacion-black";
            }
            break;
        default:
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("blur", validacionesform );
});

formulario.addEventListener("submit", (e) => {

    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    email = document.getElementById("email").value
    confirmeemail = document.getElementById("confirmeemail").value
    entradas = document.getElementById("entradas").value

    if (!stringvalido.test(nombre) || !stringvalido.test(apellido) || !emailvalido.test(email) || !emailvalido.test(confirmeemail) ||  email != confirmeemail || !document.querySelector('input[name="tipotarjeta"]:checked') || entradas > 20 || entradas < 1 ){
        e.preventDefault();
        alert("Complete todos los campos")
    }
 
}); 

function visacuotas() {
    alert("3 cuotas sin interés.")
    return false
}
function mastercuotas() {
    alert("6 cuotas sin interés.")
    return false
}
function americancuotas() {
    alert("12 cuotas sin interés.")
    return false
}  



