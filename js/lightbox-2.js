/*  lightbox */
const galleryItemD = document.getElementsByClassName("gallery-item-2");
const lightBoxContainerD = document.createElement("div");
const lightBoxContentD = document.createElement("div");
const lightBoxImgD = document.createElement("img");
const lightBoxPrevD = document.createElement("div");
const lightBoxNextD = document.createElement("div");

lightBoxContainerD.classList.add("lightbox");
lightBoxContentD.classList.add("lightbox-content");
lightBoxImgD.classList.add("img-fluid");
lightBoxPrevD.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNextD.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainerD.appendChild(lightBoxContentD);
lightBoxContentD.appendChild(lightBoxImgD);
lightBoxContentD.appendChild(lightBoxPrevD);
lightBoxContentD.appendChild(lightBoxNextD);

document.body.appendChild(lightBoxContainerD);

let indexD = 1;

function showLightBoxD(n) {
    if (n > galleryItemD.length) {
        indexD = 1;
    } else if (n < 1) {
        indexD = galleryItemD.length;
    }
    let imageLocation = galleryItemD[indexD - 1].children[0].getAttribute("src");
    lightBoxImgD.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainerD.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBoxD(indexD = imageIndex);
}
for (let i = 0; i < galleryItemD.length; i++) {
    galleryItemD[i].addEventListener("click", currentImage);
}

function slideImageD(n) {
    showLightBoxD(indexD += n);
}

function prevImageD() {
    slideImageD(-1);
}

function nextImageD() {
    slideImageD(1);
}
lightBoxPrevD.addEventListener("click", prevImageD);
lightBoxNextD.addEventListener("click", nextImageD);


lightBoxContainerD.addEventListener('click', e => {
    if (e.target === lightBoxContainerD) {
        lightBoxContainerD.style.display = 'none';
    }
})

// lightBoxContainer.addEventListener("click", closeLightBox);