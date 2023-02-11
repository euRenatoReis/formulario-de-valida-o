
const botaoenviar = document.getElementById('botaoenviar');

var campos = document.querySelectorAll('.campo');

var avisos = document.querySelectorAll('.aviso');


campos.forEach(input => {

   input.addEventListener('change', () => {

      if (campos.value !== "") {

         input.classList.add("tudocerto")
         return;
      }
      else {

         input.classList.remove("tudocerto")
      }


   })

})


botaoenviar.addEventListener("click", () => {


   campos.forEach(input => {

      campos.trim();

      input.addEventListener('change', () => {

 
         if (campos.value === "") {

            input.classList.add("tudoerrado")
            return;
         }
         else {

            input.classList.remove("tudoerrado")
         }


      })

   })

})

