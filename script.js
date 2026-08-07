console.log("Welcome to Sri Vigneshwara Caterers");
alert("Welcome to Sri Vigneshwara Caterers");
let companyName = "Sri Vigneshwara Caterers";
console.log(companyName);
const button = document.querySelector(".btn");
button.addEventListener("click", function(){

    alert("Booking feature coming soon!");

});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = this.getAttribute("href");

        document.querySelector(target).scrollIntoView({

            behavior:"smooth"

        });

    });

});
const navbar = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 100){

        console.log("Sticky Added");

        navbar.classList.add("sticky");

    }

    else{

        console.log("Sticky Removed");

        navbar.classList.remove("sticky");

    }

});
const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightboxImage=document.querySelector(".lightbox-image");

const closeButton=document.querySelector(".close");

galleryImages.forEach(function(image){

    image.addEventListener("click",function(){

        lightbox.style.display="flex";

        lightboxImage.src=this.src;

    });

});

closeButton.addEventListener("click",function(){

    lightbox.style.display="none";

});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

});