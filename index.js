let kollywoodFilms = document.getElementById("kollywoodbox");
let bollywoodFilms = document.getElementById("bollywoodbox");
let hollywoodFilms = document.getElementById("hollywoodbox");
let menuBtn = document.getElementById("menubtn");
let menuBox = document.getElementById("menubox");
let closeBtn = document.getElementById("closebtn");
let Kbtn = document.getElementById("kollywood");
let Bbtn = document.getElementById("bollywood");
let Hbtn = document.getElementById("hollywood");

function openKollywood (){
   kollywoodFilms.style.display="block";
   bollywoodFilms.style.display="none";
   hollywoodFilms.style.display="none";
   Kbtn.disabled = true ;
   Bbtn.disabled = false;
   Hbtn.disabled = false;
}
function openBollywood (){
    bollywoodFilms.style.display="block";
    kollywoodFilms.style.display="none";
    hollywoodFilms.style.display="none";
    Bbtn.disabled = true;
    Kbtn.disabled = false;
    Hbtn.disabled = false;
 }
 function openHollywood (){
    hollywoodFilms.style.display="block";
    bollywoodFilms.style.display="none";
    kollywoodFilms.style.display="none";
    Hbtn.disabled = true;
    Kbtn.disabled = false;
    Bbtn.disabled = false;
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
         window.location.href ="gharjwai.html";
      break;
      case "Bato":
         window.location.href ="bato.html";
      break;
         case "Chadke":
         window.location.href ="chadke.html";
      break;
         case "Chadke 2":
         window.location.href ="chadke2.html";
      break;
         case "Dal Bhat Tarkari":
         window.location.href ="dalbhattarkari.html";
      break;
         case "Degree Maila":
         window.location.href ="degreemaila.html";
      break;
         case "Dui Numbari":
         window.location.href ="duinumbari.html";
      break;
         case "Fullbari":
         window.location.href ="fullbari.html";
      break;
         case "Guleli":
         window.location.href ="guleli.html";
      break;
         case "Jaari":
         window.location.href ="jaari.html";
      break;
         case "Maha Purush":
         window.location.href ="mahapurush.html";
      break;
         case "Modibeni":
         window.location.href ="modibeni.html";
      break;
         case "Nango Gaun":
         window.location.href ="nangogaun.html";
      break;
         case "Prasad":
         window.location.href ="prasad.html";
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
         window.location.href ="gharjwai.html";
      break;
      default:
         break;
   }
}
