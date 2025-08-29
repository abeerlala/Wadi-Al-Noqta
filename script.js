const checkbox = document.querySelector("#menu");
const menuIcon = document.querySelector("#menuIcon i");
const navList = document.querySelector(".nav-list");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        menuIcon.classList.remove("fa-bars")
        menuIcon.classList.add("fa-xmark")
        navList.classList.add("activeNavList")
        document.body.style.overflow = "hidden";
    }
    else {
        menuIcon.classList.remove("fa-xmark")
        menuIcon.classList.add("fa-bars")
        navList.classList.remove("activeNavList")
        document.body.style.overflow = "auto";
    }
});

// Detect Page

const navlinks = document.querySelectorAll(".nav-link");
const pageName = location.href.split("/").pop();
const homeLink = document.querySelector(".homeLink");
const servicesLink = document.querySelector(".servicesLink");

const detectPage = (link) => {
    if (pageName == "index.html#what-we-offer") {
        homeLink.classList.add("currentPage")
    } else if (pageName == link.href.split("/").pop()) {
        link.classList.add("currentPage")
    } else if (pageName == "") {
        homeLink.classList.add("currentPage")
    } else if (pageName == "about.html") {
        navlinks[2].classList.add("currentPage")
    } else if (pageName == "contact.html") {
        navlinks[3].classList.add("currentPage")
    }
}

const options = {
    threshold: 0.2,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navlinks.forEach(link => link.classList.remove("currentPage"))
            servicesLink.classList.add("currentPage")
        } else {
            navlinks.forEach(link => {
                servicesLink.classList.remove("currentPage")
                detectPage(link)
            })
        }
    })
}, options);

navlinks.forEach(link => detectPage(link))
observer.observe(document.querySelector(".what-we-offer-1"));