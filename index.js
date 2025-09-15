let modal = document.getElementsByClassName("modal")[0]
let img = document.getElementById("profile")
let modalImg = document.getElementsByClassName("modal_content")[0]
let captionText = document.getElementById("caption")

img.onclick = function(){
    modal.style.display = "block"
    modalImg.src = this.src
    captionText.innerHTML = this.alt
}

let span = document.getElementsByClassName("close")[0]

span.onclick = function() {
    modal.style.display = "none"
}
