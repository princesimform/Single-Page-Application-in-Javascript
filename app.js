function toggleNav() {
    document.getElementById("sidebar").classList.toggle("active");
    if (document.getElementById("sidebar").style.width == "95%") {
        document.getElementById("sidebar").style.width = "0%";
    } else {
        document.getElementById("sidebar").style.width = "95%";
    }
}


// Header Position
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currrenPos = window.pageYOffset;
    if (prevScrollpos > currrenPos || currrenPos > 3800) {
        document.getElementById('header').style.top = "0";
        document.getElementById('header').style.boxShadow = "0 0 1.5rem #00000033";
        document.getElementById('header-container').style.border = "none";
    } else {
        document.getElementById('header').style.top = "-80px";
    }

    if (window.pageYOffset == 0) {
        document.getElementById('header').style.boxShadow = "none"
        document.getElementById('header-container').style.borderBottom = '1px solid #9ea5a5'
    }


    prevScrollpos = currrenPos;
}


function active(positionName) {

    let btns = document.querySelectorAll('.menu-item');
    console.log(btns);
    btns.forEach((element, inx) => {
        if (element.classList.contains(positionName)) {
            element.classList.add('active-section')
        } else {
            element.classList.remove('active-section')
        }
    });
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("sidebar").classList.toggle("active");
}

// img-slider

// const next = document.querySelector(".next");
// const prev = document.querySelector(".previous");

// const numImg = document.querySelectorAll("img").length;
// let currImg = 1;

// let timeoutID;

// next.addEventListener("click", () => {
//     currImg++;
//     clearTimeout(timeoutID);
//     updateImage();
// });

// prev.addEventListener("click", () => {
//     currImg--;
//     clearTimeout(timeoutID);

//     updateImage();
// });

// const imgcontainer = document.querySelector(".img-container");

// function updateImage() {
//     if (currImg > numImg) {
//         currImg = 1;
//     } else if (currImg < 1) {
//         currImg = numImg;
//     }
//     imgcontainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;

//     // timeoutID = setTimeout(() => {
//     //     currImg++;
//     //     updateImage();
//     // }, 2000);
// }

// updateImage();

let slideInx = 1;
showSlides(slideInx);

function plusSlides(n) {
    showSlides(slideInx += n);
}

function currentSlide(n) {
    showSlides(slideInx = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideInx = 1 }
    if (n < 1) { slideInx = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideInx - 1].style.display = "block";
}