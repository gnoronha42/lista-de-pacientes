
var BotaoAdicionar = document.querySelector("#adicionar-paciente");  //add new patient's and send a error message
BotaoAdicionar.addEventListener("click",function(){
event.preventDefault();  

var form = document.querySelector("#formadd");
var paciente = obtemPacienteDoFormulario(form)


//error report
var erros = validaPaciente(paciente);

if(erros.length){
  exibeMensagemdeErro(erros);
  return;
}
adicionaPacienteNaTabela(paciente);

form.reset();
var mensagensErro = document.querySelector("#mensagem-erro");
mensagensErro.innerHTML = "";
});
function  adicionaPacienteNaTabela (paciente){
  var pacienteTr = montaTr(paciente);  
  var  tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}
function exibeMensagemdeErro(erros){

 var ul = document.querySelector("#mensagem-erro")
 ul.innerHTML = "";
 erros.forEach(function(erro) {
 var li =  document.createElement("li");
 li.innerHTML = "";
   li.textContent = erro;
   ul.appendChild(li)
 });
}
//error report end 

// take form patient's and add a new one
function obtemPacienteDoFormulario(form){
var paciente = {
 nome:form.nome.value,
 peso: form.peso.value,
 altura: form.altura.value,
 gordura: form.gordura.value,
 imc:calculaImc(form.peso.value,form.altura.value)
 }
 return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
return pacienteTr;  
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
// Error Verification 
function validaPaciente(paciente) {
var erros = [];
if(paciente.nome.length == 0)erros.push("o nome não pode ser em branco");
if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
if(paciente.gordura.length == 0)erros.push("a gordura não pode ser em branco");
if(paciente.peso.length == 0) erros.push("o peso não pode ser em branco");
if (paciente.altura.length ==0)erros.push("a altura não pode ser em branco");
return erros;
}
