const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); //recall class active in css for hamburger
    menu.classList.toggle("active"); //recall class active in css for menu
})

document.querySelectorAll(".menu li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))