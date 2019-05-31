window.addEventListener("scroll", scrollFunction)
topButton = document.querySelector(".buttonTop");

function scrollFunction() {
    if (window.pageYOffset > 230) {
        if (!topButton.classList.contains("btnEntrance")) {
            topButton.classList.remove("btnExit");
            topButton.classList.add("btnEntrance");
            topButton.style.display = "block";
        }
    } else {
        if (topButton.classList.contains("btnEntrance")) {
            topButton.classList.remove("btnEntrance");
            topButton.classList.add("btnExit");
            setTimeout(function () {
                topButton.style.display = "none";
            }, 250);
        }
    }
}