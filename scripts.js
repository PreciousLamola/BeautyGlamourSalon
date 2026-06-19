document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Greeting based on time of day
    const mainHeading = document.querySelector('main h1');
    const hours = new Date().getHours();
    let greeting = "Welcome to Beauty Glamour";

    if (hours < 12) {
        greeting = "Good Morning! Welcome to Beauty Glamour";
    } else if (hours < 18) {
        greeting = "Good Afternoon! Welcome to Beauty Glamour";
    } else {
        greeting = "Good Evening! Welcome to Beauty Glamour";
    }
    
    if (mainHeading) {
        mainHeading.textContent = greeting;
    }

    // 2. Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a, footer a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only apply smooth scroll if it's an internal anchor link (e.g., "#contact")
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Simple Image Hover Effect
    const salonImage = document.querySelector('main img');
    if (salonImage) {
        salonImage.style.transition = "transform 0.3s ease";
        salonImage.addEventListener('mouseover', () => {
            salonImage.style.transform = "scale(1.05)";
        });
        salonImage.addEventListener('mouseout', () => {
            salonImage.style.transform = "scale(1)";
        });
    }

    // 4. Testimonial Fade-in Effect
    const testimonials = document.querySelectorAll('blockquote');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    testimonials.forEach(t => {
        t.style.opacity = "0";
        t.style.transform = "translateY(20px)";
        t.style.transition = "all 0.6s ease-out";
        observer.observe(t);
    });
});
// scripts.js

// Welcome message when the page loads
window.addEventListener("load", function () {
console.log("Welcome to My Business Website!");
});

// Change heading color when clicked
const headings = document.querySelectorAll("section h2");

headings.forEach(function (heading) {
heading.addEventListener("click", function () {
this.style.color = "blue";
});
});

// Display an alert when the Join Us link is clicked
const joinLink = document.querySelector('a[href="contact.html"]');

joinLink.addEventListener("click", function () {
alert("Thank you for your interest! We will contact you soon.");
});

// Highlight team members when the mouse moves over them
const teamMembers = document.querySelectorAll("article");

teamMembers.forEach(function (member) {
member.addEventListener("mouseover", function () {
this.style.backgroundColor = "#f0f0f0";
});

member.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
});

});

// Count and display the number of company values
const values = document.querySelectorAll("section ul li");
console.log("Number of company values: " + values.length);

// Update the footer year automatically
const footerText = document.querySelector("footer p");
footerText.innerHTML = "© " + new Date().getFullYear() + " My Business. All rights reserved.";
document.addEventListener("DOMContentLoaded", function () {

// Welcome message
console.log("Contact Page Loaded Successfully!");

// Contact Form Validation
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("emailContact").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.");
    });
}

// Newsletter Subscription
const newsletterForm = document.querySelectorAll("form")[1];

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newsletterEmail =
            document.getElementById("newsletterEmail").value;

        alert(
            "Thank you for subscribing with: " +
            newsletterEmail
        );
    });
}

// Highlight regional offices when clicked
const offices = document.querySelectorAll("article");

offices.forEach(function (office) {
    office.addEventListener("click", function () {
        this.style.backgroundColor = "#f0f0f0";
        this.style.border = "2px solid blue";
    });
});

// Business Hours Message
const today = new Date().getDay();
let status = "";

if (today >= 1 && today <= 5) {
    status = "We are open today from 9:00 AM - 6:00 PM.";
} else if (today === 6) {
    status = "We are open today from 10:00 AM - 2:00 PM.";
} else {
    status = "Sorry, we are closed today.";
}

console.log(status);

// Update footer year automatically
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        "&copy; " +
        new Date().getFullYear() +
        " My Business. All rights reserved.";
}

});
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {

    // Select the form
    const form = document.querySelector("form");

    // Handle form submission
    form.addEventListener("submit", function (event) {

        // Get form values
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const details = document.getElementById("details").value.trim();

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Phone validation pattern
        const phonePattern = /^[0-9+\-\s()]{7,15}$/;

        // Check required fields
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            phone === "" ||
            service === "" ||
            details === ""
        ) {
            alert("Please fill in all required fields.");
            event.preventDefault();
            return;
        }

        // Validate email
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate phone number
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            event.preventDefault();
            return;
        }

        // Success message
        alert("Thank you! Your enquiry has been submitted successfully.");

    });

    // Reset button confirmation
    form.addEventListener("reset", function () {
        const confirmReset = confirm(
            "Are you sure you want to clear all form fields?"
        );

        if (!confirmReset) {
            event.preventDefault();
        }
    });

});
document.addEventListener("DOMContentLoaded", function () {

// Welcome message
alert("Welcome to Our Services Page!");

// Handle all links
const links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {

        const linkText = this.textContent;

        if (linkText === "Request a Quote") {
            event.preventDefault();
            alert("Thank you for your interest! A quote request form will be available soon.");
        }

        if (linkText === "Submit an Enquiry") {
            event.preventDefault();
            alert("You will be redirected to the enquiry page.");
        }
    });
});

// Highlight service headings on hover
const headings = document.querySelectorAll("h3");

headings.forEach(function(heading) {

    heading.addEventListener("mouseover", function () {
        this.style.color = "blue";
        this.style.cursor = "pointer";
    });

    heading.addEventListener("mouseout", function () {
        this.style.color = "black";
    });

});

});