// capturo los id
var iniciajuego=document.getElementById('iniciajuego');
var muestraopciones=document.getElementById('muestraopciones');
var textoadivinanza=document.getElementById('textoadivinanza');
var opcion1=document.getElementById('opcion1');
var opcion2=document.getElementById('opcion2');
var opcion3=document.getElementById('opcion3');
var opcion4=document.getElementById('opcion4');
var errores=0;

// escucho el click eventos
muestraopciones.addEventListener('click',()=>{muestra();});
iniciajuego.addEventListener('click',()=>{inicia();});
opcion1.addEventListener('click',()=>{elegida(1)});
opcion2.addEventListener('click',()=>{elegida(2)});
opcion3.addEventListener('click',()=>{elegida(3)});
opcion4.addEventListener('click',()=>{elegida(4)});




// funciones
function inicia(){   
    errores=0; 
    muestraopciones.disabled=false;
    iniciajuego.disabled=true;
    textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Ten cuidado con lo que respondes, solo tienes <strong>${2-errores} oportunidades para adivinar</strong></p>`
    opcion1.hidden=true;
    opcion2.hidden=true;
    opcion3.hidden=true;
    opcion4.hidden=true;
}

function muestra(){
    muestraopciones.disabled=true;
    opcion1.hidden=false;
    opcion2.hidden=false;
    opcion3.hidden=false;
    opcion4.hidden=false;
};



function elegida(op){
    if (op!=4){
        errores+=1;
        if (comprobar()){
            iniciajuego.disabled=false;
            textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Lamentablemente haz agotado tus oportunidades, <strong>PERDISTE!!</strong>. La respuesta era "Todas las anteriores", Ya que el perro es un Can (de la familia de los caninos), un cuadrúpedo ya que posee 4 patas y un mamífero ya que amamanta a sus crias.</p>`
        } else {textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Ten cuidado con lo que respondes, solo tienes <strong>${2-errores} oportunidades para adivinar</strong></p>`}
    } else {
        iniciajuego.disabled=false;
        textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Excelente, haz adivinado, o puede que ya conocías la respuesta, si es así, eres muy inteligente, <strong>FELICIDADES</strong></p>`}
}

function comprobar (){
    if (errores<2) { return false;} else{return true};
}
