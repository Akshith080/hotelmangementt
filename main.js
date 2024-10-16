const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
});
navLinks.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});
const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,

}
//header contaienr
ScrollReveal().reveal(".header-container p",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header-container h1",{
    ...scrollRevealOption,
    delay:500,
});
//about contaienr
ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".about-content .section-subheader",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".about-content .section-description",{
    ...scrollRevealOption,
    delay:1500,
});
ScrollReveal().reveal(".about-btn ",{
    ...scrollRevealOption,
    delay:2000,
});
//room contaienr
ScrollReveal().reveal(".room-card",{
    ...scrollRevealOption,
    interval:500,
});
//service container
ScrollReveal().reveal(".service-list li",{
    ...scrollRevealOption,
    interval:500,
    origin:"right",
});