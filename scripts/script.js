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
