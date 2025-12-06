const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks=document.querySelectorAll(".nav-menu .nav-link");

//mine 
// const homeButton = document.querySelector("#home-button");


menuOpenButton.addEventListener("click", () => {
    // Toggle MOBILE MENU visibility
    document.body.classList.toggle("show-mobile-menu");
})

//close the MENU when the CLOSE button is clicked. 
// if we click on MENU BAR again it will close. 
// thats why openButton method is called.
menuCloseButton.addEventListener("click", () => menuOpenButton.click());


//CLOSE MENU when NAV LINK IS CLICKED
navLinks.forEach(link=>{
    link.addEventListener("click", () => 
    document.body.classList.remove("show-mobile-menu"))})

// navLinks.forEach(link => {
//     link.addEventListener("click",()=>menuOpenButton.click());
// });


//mine 
//if i click on home in mobile view, it will close that MENU. (by default home will be opened. so no worry)




