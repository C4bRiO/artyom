$(document).ready(function(){

	function startContinuousArtyom(){
	    artyom.fatality();// use this to stop any of

	    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
	         artyom.initialize({
	            lang:"es-ES",// A lot of languages are supported. Read the docs !
	            continuous:true,// Artyom will listen forever
	            listen:true, // Start recognizing
	            debug:true, // Show everything in the console
	            speed:1 // talk normally
	        }).then(function(){
	            console.log("Ready to work !");
	        });
	    },250);
	}	

	/*LISTA DE TAREAS
		1. Check if connection is http or https for applying the right function
		2. Show a message when the mic is listening, and when it stops.
		3. write on the div, the word that artyom has just listened.
		4. write on a database directly from js.
	*/


   $('#btn_iniciar').click(function(){
   		console.log('Escucha iniciada');
		startContinuousArtyom();
		console.log('Hable ahora');	
	});   		

    $('#btn_finalizar').click(function(){
   		console.log('Escucha finalizada');
   		artyom.fatality();
   		 $("#test3").val("");
    });
});