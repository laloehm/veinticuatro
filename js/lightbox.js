$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})

wow = new WOW({
    mobile: true // default
})
wow.init();

// Modal
$('#pantallasvapor').on('click', () => {
    // $('.myFrame').removeAttr('src');
    $('#vpantallas').get(0).play();
})

$('.close').on('click', () => {
    document.getElementById('vpantallas').pause();
    document.getElementById('vpantallas').currentTime = 0;
})

$('#ventilador').on('click', () => {
    // $('.myFrame').removeAttr('src');
    $('#vventilador').get(0).play();
})

$('.close').on('click', () => {
    document.getElementById('vventilador').pause();
    document.getElementById('vventilador').currentTime = 0;
    document.getElementById('vkotex').pause();
    document.getElementById('vkotex').currentTime = 0;
    document.getElementById('vtrojan').pause();
    document.getElementById('vtrojan').currentTime = 0;
})

$('#imgkotex').on('click', () => {
    // $('.myFrame').removeAttr('src');
    $('#vkotex').get(0).play();
})
$('#trojan').on('click', () => {
    // $('.myFrame').removeAttr('src');
    $('#vtrojan').get(0).play();
})

// Fin Modal

/*  lightbox */
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxImg.classList.add("img-fluid");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImages() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImages);
}

function slideImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    slideImage(-1);
}

function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);


lightBoxContainer.addEventListener('click', e => {
    if (e.target === lightBoxContainer) {
        lightBoxContainer.style.display = 'none';
    }
})


/*  lightbox */
const galleryItemT = document.getElementsByClassName("gallery-item-team");
const lightBoxContainerT = document.createElement("div");
const lightBoxContentT = document.createElement("div");
const lightBoxImgT = document.createElement("img");
const lightBoxPrevT = document.createElement("div");
const lightBoxNextT = document.createElement("div");

lightBoxContainerT.classList.add("lightbox");
lightBoxContentT.classList.add("lightbox-content");
lightBoxImgT.classList.add("img-fluid");
lightBoxPrevT.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNextT.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainerT.appendChild(lightBoxContentT);
lightBoxContentT.appendChild(lightBoxImgT);
lightBoxContentT.appendChild(lightBoxPrevT);
lightBoxContentT.appendChild(lightBoxNextT);

document.body.appendChild(lightBoxContainerT);

let indexT = 1;

function showLightBoxT(n) {
    if (n > galleryItemT.length) {
        indexT = 1;
    } else if (n < 1) {
        indexT = galleryItemT.length;
    }
    let imageLocation = galleryItemT[indexT - 1].children[0].getAttribute("src");
    lightBoxImgT.setAttribute("src", imageLocation);
}

function currentImageT() {
    lightBoxContainerT.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBoxT(indexT = imageIndex);
}
for (let i = 0; i < galleryItemT.length; i++) {
    galleryItemT[i].addEventListener("click", currentImageT);
}

function slideImageT(n) {
    showLightBoxT(indexT += n);
}

function prevImageT() {
    slideImageT(-1);
}

function nextImageT() {
    slideImageT(1);
}
lightBoxPrevT.addEventListener("click", prevImageT);
lightBoxNextT.addEventListener("click", nextImageT);


lightBoxContainerT.addEventListener('click', e => {
    if (e.target === lightBoxContainerT) {
        lightBoxContainerT.style.display = 'none';
    }
})