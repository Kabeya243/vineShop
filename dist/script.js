let menuBtn = document.querySelector(".bx-menu");
let closeBtn = document.querySelector(".bx-x");
let menu = document.querySelector(".menu");

document.body.onscroll =()=>{
    let nav = document.querySelector("nav");
    nav.style.cssText = `
    background: #0000007b;
    backdrop-filter:blur(10px);
    `
}
menuBtn.addEventListener("click",()=>{
    menu.classList.add("active");
})
closeBtn.addEventListener("click",()=>{
    menu.classList.remove("active");
})