// capturo los elementos por medio de los id de botones para iniciar, mostrar y del div del contenido
var iniciajuego=document.getElementById('iniciajuego');
var muestraopciones=document.getElementById('muestraopciones');
var textoadivinanza=document.getElementById('textoadivinanza');
var opciones=[]; //para guardar los elementos de las opciones por el id
for (let i=0;i<4;i++){
    opciones[i]=document.getElementById(i);
}
var errores=0; //contador de errores


// escucho el click eventos
muestraopciones.addEventListener('click',()=>{muestra();});
iniciajuego.addEventListener('click',()=>{inicia();});
for (let i=0;i<4;i++){
    opciones[i].addEventListener('click',()=>{elegida(i)});
    }

// funciones
function inicia(){   //contador de errores en 0, habilita boton de opciones, coloca el texto de adivinanza en el div, y coloca las opciones todas en azul 
    errores=0; 
    muestraopciones.disabled=false;
    iniciajuego.disabled=true;
    textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Ten cuidado con lo que respondes, solo tienes <strong>${2-errores} oportunidades para adivinar</strong></p>`
    for (let i=0;i<4;i++){
    opciones[i].hidden=true;
    opciones[i].classList="btn btn-outline-primary";
    }
}

function muestra(){ //muestra las opciones y dehabilita el boton de mostrar opciones
    muestraopciones.disabled=true;
    for (let i=0;i<4;i++){
        opciones[i].hidden=false;
        }
};



function elegida(op){ //parametro la opcion elegida
    if (op!=3){  //si no es la ganadora 
        opciones[op].classList="btn btn-outline-warning"; //pone opcion amarilla
        errores+=1; //suma un error 
        if (comprobar()){ //pregunta si ya hay dos errores
            iniciajuego.disabled=false;//si ya hay dos errores, habilita el boton iniciar y cambio el texto del div
            textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Lamentablemente haz agotado tus oportunidades, <strong>PERDISTE!!</strong>. La respuesta era "Todas las anteriores", Ya que el perro es un Can (de la familia de los caninos), un cuadrúpedo ya que posee 4 patas y un mamífero ya que amamanta a sus crias.</p>`
        } else {//si me queda una opcion le advierte que le queda 1 oportunidad
            textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Ten cuidado con lo que respondes, solo tienes <strong>${2-errores} oportunidades para adivinar</strong></p>`}
    } else {//si es la ipcion ganadora
        opciones[op].classList="btn btn-outline-success";//pinto boton verde
        iniciajuego.disabled=false;//habilito el boton para iniciar y felicito en el div
             textoadivinanza.innerHTML=`<h1>Que es un perro?</h1><br><p>Excelente, haz adivinado, o puede que ya conocías la respuesta, si es así, eres muy inteligente, <strong>FELICIDADES</strong></p>`}
}

function comprobar (){
    if (errores<2) { return false;} else{return true};
}
