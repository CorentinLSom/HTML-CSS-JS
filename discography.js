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

const lightbox = new SimpleLightbox(".card a")

const options = {
    gutterPixels: 40
}

const filterizr = new Filterizr(".portfolio-elements", options)

let filterItems = document.querySelectorAll(".filters li")
filterItems.forEach(function (filterItem) {
    filterItem.addEventListener("click", function () {
        document.querySelector("li.active").classList.remove("active")
        filterItem.classList.add("active")
    })
})