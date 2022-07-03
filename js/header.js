function headerModal(text){
    document.querySelector(".header-modal").style.display = text
    document.body.style.overflowY = text === "flex" ? "hidden" : "scroll"
}