/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener("scroll", () => {

    let current = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 140;


        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.toggle(

            "active",

            link.getAttribute("href")
                === `#${current}`

        );

    });

});



/* ================= SCROLL ANIMATION ================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const formData =
            new FormData(contactForm);


        const name =
            formData.get("name");

        const email =
            formData.get("email");

        const message =
            formData.get("message");


        const subject =
            encodeURIComponent(
                `Portfolio message from ${name}`
            );


        const body =
            encodeURIComponent(

                `Name: ${name}
Email: ${email}

Message:
${message}`

            );


        window.location.href =
            `mailto:sthasujata061@gmail.com?subject=${subject}&body=${body}`;

    }
);