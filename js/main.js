/**
 * Created by Tarnos on 2020-08-19
 */
"use strict";
const textContentOffset = document.getElementById("textContent").offsetTop;
window.addEventListener("scroll", () =>{
    const textContentTopDifference = window.scrollY - textContentOffset;
    if(textContentTopDifference <= 0){
        const leftFace = document.querySelector(".left");
        const rightFace = document.querySelector(".right");
        leftFace.style.left = `${textContentTopDifference}px`;
        rightFace.style.right = `${textContentTopDifference}px`;
    }
})
