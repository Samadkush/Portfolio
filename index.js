document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector(".about-text");

    const textToType = [
        "Hi, I'm Abdsamad Kabir-Kushoro, a <strong>full-stack web developer</strong> based in Northern Cyprus ",
        "<br>",
        "I am a driven and adaptable 4th-year computer engineering student with a strong passion for web development.",
        "<br>",
        "My journey into web development began with mastering the essentials: HTML, CSS, and JavaScript.",
        "<br>",
        "Aspiring to be a <strong>full-stack web developer</strong>, I've ventured into PHP, and I'm currently honing my skills with Laravel.",
        "<br>",
        "In addition to coding prowess, I've delved into user interface design using Figma.",
        "<br>",
        "What truly sets me apart is my unique blend of technical acumen and a deep passion for creating exceptional web solutions.",
        "<br>",
        "My ultimate goal as a web developer is to exceed client expectations, building websites that not only meet your objectives but also drive results.",
        "<br>",
        "If you're a forward-thinking company seeking a <em>dedicated and innovative web developer</em> to enhance your online presence, I'm here to deliver.",
        "<br>",
        "Welcome to my portfolio, where <strong>innovation meets excellence</strong>, and where I'm ready to embark on the next exciting project with you."
    ];

    let paragraphIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (paragraphIndex < textToType.length) {
            const paragraph = textToType[paragraphIndex];
            const char = paragraph.charAt(charIndex);

            if (char === '<') {
                // Handle HTML tags
                let tag = '';
                while (paragraph.charAt(charIndex) !== '>') {
                    tag += paragraph.charAt(charIndex);
                    charIndex++;
                }
                tag += '>';
                aboutText.innerHTML += tag;
            } else {
                aboutText.innerHTML += char;
            }

            charIndex++;

            if (charIndex >= paragraph.length) {
                // Move to the next paragraph
                paragraphIndex++;
                charIndex = 0;
            }

            setTimeout(typeText, 30); // Typing speed (adjust as needed)
        }
    }

    typeText();
});
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#3498db" }, // Blue color for particles
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#3498db", // Blue color for particle connections
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });
});


