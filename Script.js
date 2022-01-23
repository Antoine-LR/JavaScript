const navbtn = document.getElementById("nav-btn");
const cancelbtn = document.getElementById("cancel-btn");
const sidenav = document.getElementById("sidenav");
const modal= document.getElementById("modal");

navbtn.addEventListener("click"), function(){
    sidenav.classList.add("show");
    modal.classList.add("showmodal");
}