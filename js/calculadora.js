 /**
  * Artyom commands examples. Just add this file after artyom is loaded in your document.
  * You can save all your commands in this file or simply follow the workflow :
  *
  * @example artyom.addCommands({CommandObject})
  * @copyright Carlos Delgado 2016
  * @author Carlos Delgado - www.ourcodeworld.com
  * @param {type} window
  * @see https://sdkcarlos.github.io/sites/artyom.html
  * @returns Artyom
  */
(function(window){
    'use strict';

    /**
     * Example Artyom Commands
     * @type Array
     */
    var calculadora = [
        //SUMAS RESTAS PRODUCTOS Y COCIENTES
        {
            indexes: ['sumar * por favor'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                var bandera = 0;
                var inicial = wildcard.trim();
                var pos_mas = inicial.indexOf("mas");
                if(pos_mas < 0 ){
                  pos_mas = inicial.indexOf('más');
                }
                var p_valor = inicial.substr(0, pos_mas - 1);
                if(p_valor.trim() == 'cinco'){
                  p_valor = 5;
                  bandera = 1;
                }
                var s_valor = inicial.substr(pos_mas+3,inicial.length);
                if(s_valor.trim() == 'cinco'){
                  s_valor = 5;
                  bandera = 1;
                }

                //var res = parseInt(p_valor.trim()) +parseInt(s_valor.trim());
                if(bandera == 1){
                  var res = parseInt(p_valor) + parseInt(s_valor);
                }else{
                  var res = parseInt(p_valor.trim()) +parseInt(s_valor.trim());
                }

                $("#test3").val(p_valor +" mas "+s_valor+" = "+res);
                $("#consola").val(recognized_text);
                /* PARA DEBUG */
                  //$("#test4").val("P_VALOR: "+p_valor);
                  //$("#test5").val("S_VALOR: "+s_valor);
                  //$("#test6").val("* INICIAL: "+inicial);
                /*fin de area de DEBUG*/
                

                artyom.say('El resultado es '+res);
                
                console.log('Palabra reconocida: '+wildcard);
            }
        },
        {
            indexes: ['restar * por favor'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                
                var inicial = wildcard.trim();
                var pos_menos = inicial.indexOf("menos");
                if(pos_menos < 0 ){
                  pos_menos = inicial.indexOf('-');
                  var s_valor = wildcard.substr(pos_menos+1,inicial.length);
                }
                var p_valor = inicial.substr(0, pos_menos - 1);
                var s_valor = wildcard.substr(pos_menos+5,inicial.length);
                
                var res = parseInt(p_valor.trim()) - parseInt(s_valor.trim());
                $("#test3").val(p_valor +" menos "+s_valor+" = "+res);
                artyom.say('El resultado es '+res);
                
                console.log('Palabra reconocida: '+wildcard);
            }
        },
        {
            indexes: ['multiplicar * por favor'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                
                var inicial = wildcard.trim();
                var pos_por = inicial.indexOf("por");
                var p_valor = inicial.substr(0, pos_por - 1);
                var s_valor = wildcard.substr(pos_por+3,inicial.length);
                
                var res = p_valor*s_valor;
                $("#test3").val(p_valor +" por "+s_valor+" = "+res);
                artyom.say('El resultado es '+res);
                
                console.log('Palabra reconocida: '+wildcard);
            }
        },
        {
            indexes: ['dividir * por favor'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);

                //*p_valor*entre*s_valor*
                var inicial = wildcard.trim();
                var pos_entre = inicial.indexOf("entre");
                var p_valor = inicial.substr(0, pos_entre - 1);
                var s_valor = wildcard.substr(pos_entre+5,inicial.length);
              
                if (s_valor > 0){
                  var res = p_valor/s_valor;
                  $("#test3").val(p_valor +" entre "+s_valor+" = "+res);
                  artyom.say('El resultado es '+res);
                }else{
                  artyom.say('No quiero dividir entre 0, podría, pero no quiero.');
                }

                console.log('Palabra reconocida: '+wildcard);
            }
        }        
        //Continue adding your own commands here
    ];

    artyom.addCommands(calculadora);
    console.log(artyom.getAvailableCommands());
})(window);
