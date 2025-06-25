let menuIcon=document.querySelector(" #container .nav-parent .nav-bar .menu_icon");
let navLinks=document.querySelector(" #container .nav-parent .nav-bar .links");
let allBtn = document.querySelector("#portfolio .btns .active");
let appBtn = document.querySelector("#portfolio .btns .app-btn");
let cardBtn = document.querySelector("#portfolio .btns .card-btn");
let webBtn = document.querySelector("#portfolio .btns .web-btn");
let imageElement = document.querySelector("#portfolio .images");
let imgId = document.querySelector(".img")
let appImg = document.querySelector("#portfolio .App-img");
let cardImg = document.querySelector("#portfolio .Card-img");
let webImg = document.querySelector("#portfolio .web-img");




menuIcon.onclick= ()=>{
menuIcon.classList.toggle("fa-xmark");
//menuIcon.style.color = menuIcon.classList.contains("fa-xmark")? "black" :"white";
   // menuIcon.style.color="black";
   // menuIcon.classList.toggle("red-color");
   // menuIcon.style.color = "black";
   // menuIcon.classList.toggle("fa-bars");

navLinks.classList.toggle("active");
};


   
      allBtn.onclick = function(){
         // console.log(appBtn);
         // alert("work")
         imageElement.style.display="flex";
         cardImg.style.display="none";
         webImg.style.display="none";
         appImg.style.display="none";
      }
      appBtn.onclick=() =>{
         // console.log(appBtn);
         // alert("work")
        imageElement.style.display="none";
         cardImg.style.display="none";
         webImg.style.display="none";
         appImg.style.display="flex";
      }
      cardBtn.onclick=() =>{
         // console.log(appBtn);
         // alert("work")
         appImg.style.display="none";
         imageElement.style.display="none";
         webImg.style.display="none";
         cardImg.style.display="flex";
      }
      webBtn.onclick=() =>{
         // console.log(appBtn);
         // alert("work")
         appImg.style.display="none";
         imageElement.style.display="none";
         cardImg.style.display="none";
         webImg.style.display="flex";
      }
   

// let image = document.querySelectorAll(".img ");
// let container = document.getElementById("container");
// image.onclick = () =>{
//    container.style.display="flex";
// }

