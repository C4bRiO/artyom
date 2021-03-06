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
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['Buen día'],
            action : function(i){
              artyom.say("Buen día, señor, en que puedo ayudarle.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        },
        //Smart Command Example
        {
            indexes: ['pronuncia * por favor'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        },
        {
            indexes: ['Hola Jose me llamo *'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say("Mi nombre no es Jose, es Artyom, pero Bienvenido "+ wildcard);
                $("#test3").val(wildcard);
                //document.getElementById("texto").innerHTML = wildcard;
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
                //var p_valor = wildcard.substr(0, 1);
                //var s_valor = wildcard.substr(6,1);
                var res = p_valor*s_valor;
                $("#test3").val(p_valor +" por "+s_valor+" = "+res);
                artyom.say('El resultado es '+res);
                //document.getElementById("texto").innerHTML = wildcard;
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

    artyom.addCommands(artyomCommands);

    /**
     * Or use the shorter and cleaner method :
     */

    artyom.on(['Good morning']).then(function(i){
        alert("Good morning ! How are you?");
    });    

    artyom.on(['Repeat after me *'] , true).then(function(i, wildcard){
        alert("You've said " + wildcard);
    });

    console.log(artyom.getAvailableCommands());
})(window);
