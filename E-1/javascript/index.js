// modal
const modal = document.querySelector('.modal');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.onclick = function() {
    modal.style.display = 'block';
}
close.onclick = function() {
    modal.style.display = 'none';
}

// slide
let slideIndex = 0;
const slideBox = document.querySelector('.slide-box');
const slides = document.querySelectorAll('.slide');
// const slideClone = slideBox.firstElementChild.cloneNode(true);
// slideBox.appendChild(slideClone);

slideShow();

function slideShow() {
    if (slideIndex == slides.length) {
        slideBox.style.transition = '0s';
        slideIndex = 0;
    } else {
        slideBox.style.transition = 'all 0.6s';
        slideBox.style.marginLeft = -slideIndex * 100 + '%';
        slideIndex++;
    }
    setTimeout(slideShow, 3000);
}

// setInterval(() => {
//     if (slideIndex == slides.length) {
//         setTimeout(() => {
//             slideBox.style.transition = '0s';
//             slideBox.marginLeft = '0';
//             slideIndex = 0;
//         }, 700);
//     } else {
//         slideBox.style.transition = 'all 0.6s';
//         slideBox.style.marginLeft = -slideIndex * 100 + '%';
//         slideIndex++;
//     }
// }, 3000);