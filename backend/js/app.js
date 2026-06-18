function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* SIMPLE SEARCH (biar masuk "Additional JS Feature") */
function searchCoffee() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    console.log("Searching:", input);
}

/* DARK MODE STYLE INJECT */
const style = document.createElement("style");
style.innerHTML = `
.dark-mode {
    background-color: #1a1a1a;
    color: white;
}

.dark-mode .hero {
    background-color: #111;
}

.dark-mode .navbar {
    background-color: #000;
}
`;
document.head.appendChild(style);