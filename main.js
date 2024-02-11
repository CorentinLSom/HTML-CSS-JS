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

const swiper = new Swiper('.mon-slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },
});

let button = document.getElementById("button")

button.addEventListener("click", function () {
    document.body.classList.toggle("light")
})