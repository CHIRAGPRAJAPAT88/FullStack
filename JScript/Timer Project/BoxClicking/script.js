let image = document.getElementById("image");
let imageBox = document.getElementById("imageBox");
let imageContainer = document.getElementById("imageContainer");
let closeButton = document.getElementById("closeButton");

let images = ["img/img.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
let currentIndex = 0;

function showImage() {
    imageBox.style.display = "block";
    image.src = images[currentIndex];
    closeButton.style.display = "block";
}

function closeImage() {
    imageBox.style.display = "none";
    closeButton.style.display = "none";
}

showImage();
