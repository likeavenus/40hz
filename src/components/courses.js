import { coursesInfo, closeCoursesPopup } from './constants';

export default function Courses() {
    const popupTemplate = document.querySelector('.course__temp');
    const coursesPopup = document.querySelector('.courses__popup');
    const coursesItems = document.querySelectorAll('.courses__item');
    const curtain = document.querySelector('.curtain');
    const coursesBackBtn = document.querySelector('.courses__back');
    const popupContent = popupTemplate.content;
    const coursesTitle = popupContent.querySelector('.courses__popup-title');
    const coursesText = popupContent.querySelector('.courses__text');
    const coursesInfoWrap = popupContent.querySelector('.courses__popup-wrap');
    const courseElement = popupContent.querySelector('.js-course-item');
    const coursesAdv = popupContent.querySelector('.courses__advantages');
    const coursesBox = document.querySelector('.courses__popup-box');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');

    /** создаем переменную для хранения текущего скролла,
     *  для того что бы можно было навесить на main diplay: none;
     *  и не потерять текущее значение скролла  */
    let pageYOffset;

    coursesItems.forEach(item => {
        item.addEventListener('click', function() {
            const thisCourseData = this.getAttribute('data-course');
            const thisCourse = coursesInfo.find(item => item.name === thisCourseData);
            courseElement.innerHTML = '';
            coursesAdv.innerHTML = '';
            coursesTitle.innerHTML = '';
            coursesText.innerHTML = '';

            for (let child of this.children) {
                courseElement.appendChild(child.cloneNode(true));
            }

            const titleText = thisCourse.title.split(' ');

            if (titleText.length === 2) {
                coursesTitle.insertAdjacentHTML('afterbegin', `<span class="text__backlight">${titleText[0]}</span> ${titleText[1]}`);
            } else if (titleText.length > 2) {
                coursesTitle.insertAdjacentHTML('afterbegin', `<span class="text__backlight">${titleText[0]}</span> ${titleText[1]} ${titleText[2]}`);
            } else {
                coursesTitle.insertAdjacentHTML('afterbegin', `<span class="text__backlight">${titleText.join(' ')}</span>`);
            }

            
            coursesText.insertAdjacentHTML('afterbegin', thisCourse.text);

            thisCourse.listItems.forEach(item => {
                coursesAdv.insertAdjacentHTML('afterbegin', `<li class="advantages__item">${item}</li>`);
            });
            coursesBox.append(popupContent);

            coursesPopup.classList.add('active');
            curtain.className += ' animate';

            /** сохраняем текущий скролл  */
            pageYOffset = window.pageYOffset;
            
            setTimeout(() => {
                main.classList.add('main--hidden');
                header.classList.add('header--hidden');
                coursesBackBtn.style.display = 'block';
                coursesInfoWrap.classList.add('active');
                coursesBox.classList.add('active');
            }, 500);

            setTimeout(() => {
                curtain.classList.remove('animate');
            }, 1000);
        });

        
    });

    coursesBackBtn.addEventListener('click',
     () => closeCoursesPopup(
        curtain,
        coursesInfoWrap,
        coursesBox,
        coursesPopup,
        main,
        pageYOffset,
        coursesBackBtn,
        header,
        )
    );
}