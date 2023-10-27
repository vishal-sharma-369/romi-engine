const navigation_links = document.querySelectorAll(".navigator a")
const path = window.location.pathname
if (path == "/") {
    navigation_links[0].style.color = "white"
}

Array.from(navigation_links).forEach((link) => {
    if (path == "/") return
    if (path.includes(link.innerText.toLowerCase())) {
        link.style.color = "white"
    }
})

// Handling the drawer opening and closing functionality
const closeButton = document.getElementById("drawer-cross")
const menuIcon = document.getElementById("menu-icon")
const drawer = document.getElementsByClassName("drawer")[0]

function openDrawer(drawer) {
    drawer.classList.add("drawer-show")
}

function closeDrawer(drawer) {
    drawer.classList.remove("drawer-show")
}

menuIcon.addEventListener("click", (e) => {
    openDrawer(drawer)
})

closeButton.addEventListener("click", (e) => {
    closeDrawer(drawer)
})
