// ========================================
// SRI VIGNESHWARA CATERERS
// MAIN JAVASCRIPT
// ========================================

console.log("Welcome to Sri Vigneshwara Caterers");


// ========================================
// COMPANY NAME
// ========================================

const companyName = "Sri Vigneshwara Caterers";

console.log(companyName);


// ========================================
// WELCOME MESSAGE
// ========================================

// Show welcome message when the page loads
window.addEventListener("load", function () {
    alert("Welcome to Sri Vigneshwara Caterers");
});


// ========================================
// BOOKING BUTTONS
// ========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const href = button.getAttribute("href");

        // Allow normal navigation if the button has a real section link
        if (href && href.startsWith("#") && href.length > 1) {
            return;
        }

        event.preventDefault();

        alert("Booking feature coming soon!");

    });

});


// ========================================
// NAVIGATION - SMOOTH SCROLL
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = this.getAttribute("href");

        // Ignore invalid "#" links
        if (!target || target === "#") {
            event.preventDefault();
            return;
        }

        const targetSection = document.querySelector(target);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// STICKY HEADER
// ========================================

const navbar = document.querySelector("header");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 100) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

}


// ========================================
// GALLERY LIGHTBOX
// ========================================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeButton = document.querySelector(".close");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        if (lightbox && lightboxImage) {

            lightbox.style.display = "flex";

            lightboxImage.src = this.src;

            lightboxImage.alt = this.alt;

            document.body.style.overflow = "hidden";

        }

    });

});


// Close lightbox

if (closeButton) {

    closeButton.addEventListener("click", function () {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    });

}


// Close lightbox when clicking outside image

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

            document.body.style.overflow = "";

        }

    });

}


// Close lightbox using ESC key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});


// ========================================
// CONTACT FORM
// ========================================

// IMPORTANT:
// HTML uses id="contact-form"

const contactForm = document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const eventType = document.getElementById("eventType").value;

        const eventDate = document.getElementById("eventDate").value;

        const guests = document.getElementById("guests").value;

        const message = document.getElementById("message").value.trim();


        // Basic validation

        if (name === "") {

            alert("Please enter your name.");

            return;

        }


        if (email === "") {

            alert("Please enter your email.");

            return;

        }


        if (phone === "") {

            alert("Please enter your phone number.");

            return;

        }


        if (eventType === "") {

            alert("Please select an event type.");

            return;

        }


        if (eventDate === "") {

            alert("Please select your event date.");

            return;

        }


        if (guests === "") {

            alert("Please enter the number of guests.");

            return;

        }


        // Form data is ready

        console.log("Enquiry Details:");

        console.log("Name:", name);

        console.log("Email:", email);

        console.log("Phone:", phone);

        console.log("Event Type:", eventType);

        console.log("Event Date:", eventDate);

        console.log("Guests:", guests);

        console.log("Message:", message);


        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your enquiry has been received.\n" +
            "We will contact you soon."
        );


        // Clear form after submission

        contactForm.reset();

    });

}


// ========================================
// GALLERY FILTER
// ========================================

const filterButtons = document.querySelectorAll(".gallery-filter button");

const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class to clicked button

        this.classList.add("active");


        const filter = this.textContent.trim().toLowerCase();


        galleryItems.forEach(function (item) {

            if (filter === "all") {

                item.style.display = "block";

            } else {

                if (item.classList.contains(filter)) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            }

        });

    });

});
