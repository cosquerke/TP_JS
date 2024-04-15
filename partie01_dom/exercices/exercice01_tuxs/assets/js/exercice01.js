"use strict";
//TODO

const images = document.querySelectorAll("#images img");
const image_rendu = document.querySelector("#image img");

images.forEach(img =>{
    img.addEventListener("click",()=>{
        console.log(img.getAttribute("src"));
        image_rendu.setAttribute("src",img.getAttribute("src"));
    })
})