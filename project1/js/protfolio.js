let protfolioElement = document.querySelectorAll(".protfolio");
let btnsElement = document.querySelectorAll(".btns");
let appBtn = document.querySelectorAll(".app-btn");
let appImg = document.querySelectorAll(".App-img");
let appTitle = document.querySelectorAll(".App-title");


appBtn.onClick = ()=>{
    appBtn.classList.toggle(".app-btn");
    appImg.classList.toggle("active");
    appTitle.classList.toggle("active");
    
 }

