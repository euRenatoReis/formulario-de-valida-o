
const botaoenviar = document.querySelector('.botaoenviar');

var campos = document.querySelectorAll('.campo');

var avisos = document.querySelectorAll('.aviso');



botaoenviar.addEventListener('click', validar())



function validar(){


   if(!campos.value){

     avisos.classList.remove('oculto');
     campos.classList.add("tudoerrado");
     avisos.setAttribute('required', true)

     return;
   }
   else{
   
      avisos.classList.add("oculto");
      campos.classList.add("tudocerto");
      avisos.setAttribute('required', false)
 
      return;
   }
 
}