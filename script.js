

document.addEventListener("DOMContentLoaded", function () {
    
    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("accept-cookies");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        banner.style.display = "flex"; 
    }

   
    btn.addEventListener("click", function () {
        banner.style.display = "none";
        localStorage.setItem("cookiesAccepted", "true");
    });
});

const testimonials = document.querySelectorAll(".testimonial");
    let testimonialIndex = 0;

    if (testimonials.length > 0) {
        testimonials[0].classList.add("active"); // show first testimonial
    }

    function rotateTestimonials() {
        testimonials[testimonialIndex].classList.remove("active");
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add("active");
    }

    
    setInterval(rotateTestimonials, 4000);

    function toggleNav() {
  const nav = document.getElementById("sideNav");
  nav.style.width = nav.style.width === "250px" ? "0" : "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

