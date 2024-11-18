document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    boxes.forEach((box) => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", () => {
    const presentation = document.querySelector("#presentation");
    presentation.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".real");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    boxes.forEach((box) => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", () => {
    const clients = document.querySelectorAll(".client");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    clients.forEach((client) => observer.observe(client));
});

