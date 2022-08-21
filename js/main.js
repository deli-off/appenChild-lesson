var elButton = document.createElement("button");
elButton.textContent = "Click me";
var elContainer = document.querySelector("[data-container]");
elButton.setAttribute("type", "button");
elButton.classList.add("test-class")

elButton.addEventListener("click", function (evt) {
    var randomNumber = Math.floor(Math.random() * 100);
    var elH3 = document.createElement("h3");
    elH3.textContent = randomNumber;

    elContainer.appendChild(elH3)
})

console.log(elButton);


elContainer.appendChild(elButton);



