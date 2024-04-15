"use strict";
//TODO

const modale = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const btn_span = document.querySelector("span");

btn.addEventListener("click", ()=>{
    modale.classList.add("displayBlock");
})


document.querySelector('body').addEventListener('click', function(event) {
    if (event.target == modale) {
    //avec modale votre modale
        modale.classList.remove("displayBlock");
    }
});

btn_span.addEventListener("click", ()=>{
    modale.classList.remove("displayBlock");
})