
let nav = document.querySelector("nav");
let tabs = nav.querySelectorAll("a");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    });
});



