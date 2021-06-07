import { coursesInfo } from './constants';

export default function Courses() {
    const coursesItems = document.querySelectorAll('.courses__item');
    const coursesPopup = document.querySelector('.courses__popup');
    const coursesTitle = document.querySelector('.courses__popup-title');
    const coursesText = document.querySelector('.courses__text');
    const coursesCost = document.querySelector('.courses__cost');
    const coursesBackBtn = document.querySelector('.courses__back');
    const coursesInfoWrap = document.querySelector('.courses__popup-wrap');
    const coursesBox = document.querySelector('.courses__popup-box');
    const curtain = document.querySelector('.curtain');

    coursesItems.forEach(item => {
        item.addEventListener('click', function() {
            const thisCourse = this.getAttribute('data-course');
            const thisCourseTitle = this.querySelector('.courses__info').innerText;
            const thisCoursePrice = this.querySelector('.courses__price').innerText;
            const currentCoursesText = coursesInfo.find(item => item.name === thisCourse).text;
            coursesPopup.classList.add('active');
            
            setTimeout(() => {
                coursesTitle.innerText = thisCourseTitle;
                coursesText.innerText = currentCoursesText;
                coursesCost.innerText = thisCoursePrice;
                coursesInfoWrap.classList.add('active');
                coursesBox.classList.add('active');
            }, 500);
        })
    });

    coursesBackBtn.addEventListener('click', () => {
        curtain.style.animation = 'none';
        curtain.offsetHeight;
        curtain.style.animation = null; 

        setTimeout(() => {
            coursesTitle.innerText = '';
            coursesText.innerText = '';
            coursesCost.innerText = '';
            coursesInfoWrap.classList.remove('active');
            coursesBox.classList.remove('active');
        }, 500);

        setTimeout(() => {
            coursesPopup.classList.remove('active');
        }, 1000);
    });

}