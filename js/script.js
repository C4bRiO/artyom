$(document).ready(function(){

   $('#btn_iniciar').click(function(){
   		//alert('Escucha iniciada');
   		artyom.on(['Good morning']).then(function(i){
        alert("Good morning ! How are you?");
    });
   });

      $('#btn_finalizar').click(function(){
   		alert('Escucha finalizada');
   });
});