let kollywoodFilms = document.getElementById("kollywoodbox");
let bollywoodFilms = document.getElementById("bollywoodbox");
let hollywoodFilms = document.getElementById("hollywoodbox");
let menuBtn = document.getElementById("menubtn");
let menuBox = document.getElementById("menubox");
let closeBtn = document.getElementById("closebtn")

function openKollywood (){
   kollywoodFilms.style.display="block";
   bollywoodFilms.style.display="none";
   hollywoodFilms.style.display="none";
}
function openBollywood (){
    bollywoodFilms.style.display="block";
    kollywoodFilms.style.display="none";
    hollywoodFilms.style.display="none";
 }
 function openHollywood (){
    hollywoodFilms.style.display="block";
    bollywoodFilms.style.display="none";
    kollywoodFilms.style.display="none";
 }
 function menubtn (){
    menuBox.style.display="block";
    menuBtn.style.display="none";
 }
 function closebtn (){
    menuBox.style.display="none";
    menuBtn.style.display="block";
 }
 let Ksearch = document.getElementById("ksearch").value;
 let Bsearch = document.getElementById("bsearch").value;
 let Hsearch = document.getElementById("hsearch").value;


function findK(){
   let Ksearch = document.getElementById("ksearch").value;
   switch(Ksearch){
      case "Gharjwai":
         window.location.href ="detail.html";
      break;
      default:
         break;
   }
}
function findB(){
   let Bsearch = document.getElementById("bsearch").value;
   switch(Bsearch){
      case "Gharjwai":
         window.location.href ="detail.html";
      break;
      default:
         break;
   }
}
function findH(){
   let Hsearch = document.getElementById("hsearch").value;
   switch(Hsearch){
      case "Gharjwai":
         window.location.href ="detail.html";
      break;
      default:
         break;
   }
}
