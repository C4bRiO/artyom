$(document).ready(function(){

   $('#btn_iniciar').click(function(){
   		//alert('Escucha iniciada');
   		
   		function startContinuousArtyom(){
    	artyom.fatality();// Detener cualquier instancia previa

    	setTimeout(function(){// Esperar 250ms para inicializar
        	artyom.initialize({
        		lang:"en-GB",// Más lenguajes son soportados, lee la documentación
		        continuous:true,// Artyom obedecera por siempre
		        listen:true, // Iniciar !
		        debug:true, // Muestra un informe en la consola
		        speed:1 // Habla normalmente
		    }).then(function(){
        	
        	console.log("Ready to work !");
       	 	});
    	},250);
}
    });
   });

      $('#btn_finalizar').click(function(){
   		alert('Escucha finalizada');
   });
});