const title = document.getElementById("mainTitle");
const description = document.querySelector("#description");
const button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    title.textContent = "DOM Updated!";
    description.textContent = "The content has changed.";
    title.style.color = "blue";
    title.classList.add("active");
});