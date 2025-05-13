let bars = document.querySelector("#bars i"); 
let navbar = document.querySelector(".nav-bar ul");
bars.addEventListener('click', function () {
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex";
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
        
    } else {
        navbar.style.display = "none";
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    }
});
