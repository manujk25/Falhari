const sliderDom = document.getElementById("slider");

let currentImage = 0;

function renderImages() {
    sliderImages.forEach((image) => {
        sliderDom.innerHTML += "<img src='" + image + "' />";
    });
}

function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
}

function showImage(image) {
    clearImages();
    document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
    renderImages();
    showImage(currentImage);
}

init();

let myBtn = document.querySelector("#prevButton");

myBtn.onclick = function() {
    const newImage = (currentImage + 1) % sliderImages.length;

    showImage(newImage);
}
let myBtn2 = document.querySelector("#nextButton");

myBtn2.onclick = function() {
    const newImage = (currentImage + 1) % sliderImages.length;
    showImage(newImage);


}
