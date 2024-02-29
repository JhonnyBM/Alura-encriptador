let message=document.querySelector(".message");
let answer=document.querySelector(".answer");
let textContainer=document.querySelector(".text-container");

let eButton=document.querySelector("#e-btn");
let dButton=document.querySelector("#d-btn");
let copyButton=document.querySelector("#copy-btn");

function encriptar(){
    if (message.value.length===0){
        alert("Debe indicar un mensaje")
    } else{
        let encriptado=message.value
        .replace(/e/ig,"enter")
        .replace(/i/ig,"imes")
        .replace(/o/ig,"ober")
        .replace(/u/ig,"ufat")
        .replace(/a/ig,"ai");

       printing(encriptado)
    }
   

}

function desencriptar(){
    if (message.value.length===0){
        alert("Debe indicar un mensaje")
    } else{
        let encriptado=message.value
            .replace(/enter/ig,"e")
            .replace(/imes/ig,"i")
            .replace(/ober/ig,"o")
            .replace(/ufat/ig,"u")
            .replace(/ai/ig,"a");

        printing(encriptado)
    }
}

function printing(encriptado){
    textContainer.style.display="none";
    answer.textContent=encriptado.toLowerCase();
    message.value="";
    copyButton.style.display="block";
}

function copy(){
    let contenido=answer.textContent;
    navigator.clipboard.writeText(contenido);
}

