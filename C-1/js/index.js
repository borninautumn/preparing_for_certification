// slider var
let slideIndex = 0;
// tabmenu var
const tab_button = $('.tab-button');
const tab_content = $('.tab-content');
// modal var
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const open = document.querySelector('.open')

slideShow();
tabMenuFunc();

/**
 * slider func
 */
function slideShow() {
    const slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('fade');
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('fade');
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(slideShow, 3000);
}

/**
 * tab menu func
 */
function tabMenuFunc() {
    for (let i = 0; i < tab_content.length; i++) {
        tab_button.eq(i).on('click', function() {
            tab_button.removeClass('sel');
            tab_button.eq(i).addClass('sel');
            tab_content.removeClass('show');
            tab_content.eq(i).addClass('show')
        });
    }
}

/**
 * modal func
 */
open.onclick = function() {
    modal.style.display = 'block';
}
close.onclick = function() {
    modal.style.display = 'none';
}