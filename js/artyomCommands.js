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
                artyom.say("Buen día, Felicidades, Jazmín y Ever por su cumple mes 2.3.",{
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
            indexes: ['escribe *'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                //artyom.say(wildcard);
                //document.getElementById("texto").innerHTML = wildcard;
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
