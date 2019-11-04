var titulo = document.querySelector(".titulo");     // Verification and Calculate Bmi's
titulo.textContent = "Lista de Pacientes (imc's)";

var pacientes  = document.querySelectorAll(".paciente")
for (var i = 0; i < pacientes.length; i++){
var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = pacientes[i].querySelector(".info-altura");
var altura =  tdAltura.textContent;
var tdImc =  pacientes[i].querySelector(".info-imc");
var pesoehvalido = validaPeso(peso); //t or f
var alturaehvalida =  validaAltura(altura);
//  Error Verification
if (!pesoehvalido){
  console.log("Peso inválido");
  pesoehvalido =  false;
  tdImc.textContent=  "Peso inválido";
  pacientes[i].classList.add("paciente-invalido");}

if(!alturaehvalida) {
  console.log ("Altura inválida");
  tdImc.textContent = "Altura inválida";
  alturaehvalida = false;
  pacientes[i].classList.add("paciente-invalido");
}

if ( alturaehvalida && pesoehvalido ){ 
var imc = peso / (altura *  altura);
  tdImc.textContent = imc.toFixed(2);
 
 }
} 

function validaPeso(peso){
   if(peso >= 0 && peso < 1000){
     return true;
   }else{
     return false;
   }
  }
 function validaAltura(altura){
   if (altura >=0  && altura <= 3.0){
    return true;
   
 }else {
}
   return false;
 }
 //Calculate  Bmi's
function calculaImc(peso,altura){
  var imc =0;
  imc=peso/(altura * altura);
  return imc.toFixed(2);
}

