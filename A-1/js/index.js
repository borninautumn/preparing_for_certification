// menu
const mainGnb = document.querySelectorAll('.gnb');
const subMenu = document.querySelector('.sub-menu')
// slide
let slideIndex = 0;
const slideBox = document.querySelector('.slide-box');
const slides = document.querySelectorAll('.slide');
slideShowY();
// tab
const tabButton = $('.tab-button');
const tabContent = $('.tab-content');
tabFunc();
// modal
const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open');
const closeModalButton = document.querySelector('.close');

// 메인 네브 메뉴
function mouseentrFunc() {
    subMenu.style.display = 'block';
}
function mouseleaveFunc() {
    subMenu.style.display = 'none';
}
mainGnb.forEach((el) => {
    el.addEventListener('mouseenter', mouseentrFunc);
});
subMenu.addEventListener('mouseleave', mouseleaveFunc);

// 슬라이드
function slideShowY() {
    if (slideIndex >= 3) {
        slideIndex = 0;
    } else {
        slideBox.style.transform = 'translateY(-' + slideIndex * 3 + '00px)';
        slideIndex++;
    }
    setTimeout(slideShowY, 2000);
}

// 탭메뉴
function tabFunc() {
    for (let i = 0; i < tabContent.length; i++) {
        tabButton.eq(i).on('click', function() {
            tabButton.removeClass('orange');
            tabButton.eq(i).addClass('orange');
            tabContent.removeClass('show');
            tabContent.eq(i).addClass('show');
        });
    }
}

// 모달창
openModalButton.onclick = function() {
    modal.style.display = 'block';
}
closeModalButton.onclick = function() {
    modal.style.display = 'none';
}