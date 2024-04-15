"use strict";
//TODO
const input = document.querySelector("input");

document.body.addEventListener("keydown", (pressed_key)=>{
    if(pressed_key.key == "Enter"){
        sessionStorage.setItem("MyInput", input.value)
        document.location.href = "exercice03-1.html";
    }
})