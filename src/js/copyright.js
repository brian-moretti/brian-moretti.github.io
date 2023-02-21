const date = new Date();
let footer = document.getElementById("copyright");
footer.textContent += " " + date.getFullYear();

export { footer };
