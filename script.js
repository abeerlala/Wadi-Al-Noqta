const checkbox = document.querySelector("#menu");
const menuIcon = document.querySelector("#menuIcon i");
const navList = document.querySelector(".nav-list");

checkbox.addEventListener("change", () => {
    if(checkbox.checked) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-xmark")
        navList.classList.add("activeNavList")
    }
    else {
        menuIcon.classList.remove("fa-xmark")
        menuIcon.classList.add("fa-bars")
        navList.classList.remove("activeNavList")
    }
});