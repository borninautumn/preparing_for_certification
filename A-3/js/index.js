// slide
let slideIndex = 0;
const slideBox = document.querySelector('.slide-box');
const slides = document.querySelector('.slide');
slideShow();

// tab
const tabButton = $('.tab-button');
const tabContent = $('.tab-content');
tabFunc();

function slideShow() {
    let i;

    if (slideIndex >= 3) {
        slideIndex = 0;
    } else {
        slideBox.style.transform = 'translateX(-' + slideIndex * 1200 + 'px)';
        slideIndex++;
    }
    setTimeout(slideShow, 3000);
}

function tabFunc() {
    for(let i = 0; i < tabContent.length; i++) {
        tabButton.eq(i).on('click', function() {
            tabButton.removeClass('sel');
            tabButton.eq(i).addClass('sel');
            tabContent.removeClass('show');
            tabContent.eq(i).addClass('show');
        })
    }
}

// modal
const open = document.querySelector('.open');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

open.onclick = function() {
    modal.style.display = 'block';
}
close.onclick = function() {
    modal.style.display = 'none';
}