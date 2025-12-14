

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

    // Rotate every 3 seconds
    setInterval(rotateTestimonials, 4000);

    function toggleNav() {
  const nav = document.getElementById("sideNav");
  nav.style.width = nav.style.width === "250px" ? "0" : "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

function applySeasonTheme() {
    const month = new Date().getMonth(); // 0 = January, 11 = December
    let season;

    if (month <= 1 || month === 11) {
        season = "winter";
    } else if (month <= 4) {
        season = "spring";
    } else if (month <= 7) {
        season = "summer";
    } else {
        season = "autumn";
    }

    const root = document.documentElement;

    switch (season) {
        case "winter":
            root.style.setProperty('--bg-color', '#F4F4F9');
            root.style.setProperty('--text-color', '#2E2E3A');
            root.style.setProperty('--accent-color', '#8A8D91');
            root.style.setProperty('--header-bg', '#E6E8F0');
            break;

        case "spring":
            root.style.setProperty('--bg-color', '#F4F9F3');
            root.style.setProperty('--text-color', '#2E3D2F');
            root.style.setProperty('--accent-color', '#A3B18A');
            root.style.setProperty('--header-bg', '#E8F3E4');
            break;

        case "summer":
            root.style.setProperty('--bg-color', '#FFF6E9');
            root.style.setProperty('--text-color', '#3A2E2A');
            root.style.setProperty('--accent-color', '#C17F59');
            root.style.setProperty('--header-bg', '#FFEED9');
            break;

        case "autumn":
            root.style.setProperty('--bg-color', '#F5ECE1');
            root.style.setProperty('--text-color', '#4A3B2F');
            root.style.setProperty('--accent-color', '#8B5E3C');
            root.style.setProperty('--header-bg', '#ECD4BE');
            break;
    }
}

window.addEventListener("load", applySeasonTheme);
