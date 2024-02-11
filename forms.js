var menu = document.getElementById("myMenu")
var openButton = document.getElementById("openButton")
var closeButton = document.getElementById("closeButton")

openButton.addEventListener("click", function() {
    menu.classList.add("active")
})

closeButton.addEventListener("click", function() {
    menu.classList.remove("active")
})

menu.addEventListener("mouseleave", function() {
    menu.classList.remove("active")
})

let button = document.getElementById("button")

button.addEventListener("click", function () {
    document.body.classList.toggle("light")
})

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errorContainer = document.querySelector(".message-error");
    let errorList = document.querySelector(".message-error ul");

    errorList.innerHTML = "";
    errorContainer.classList.remove("visible");

    let prenom = document.querySelector("#prenom");
    if (prenom.value === "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ prénom ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    prenom.classList.add("success");
    }

    let nom = document.querySelector("#nom");
    if (nom.value === "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ nom ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    nom.classList.add("success");
    }

    let email = document.querySelector("#email");
    if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    email.classList.add("success");
    }

    let choice = document.querySelector("#choice");
    if (choice.value === "") {
    errorContainer.classList.add("visible");
    choice.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ choix des informations ne doit pas être vide";

    errorList.appendChild(err);
    } else {
    choice.classList.add("success");
    }

    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if (
    email.classList.contains('success') && 
    prenom.classList.contains('success') && 
    nom.classList.contains('success') &&
    choice.classList.contains("success")
    ) {
    successContainer.classList.add('visible')
    }
});