import { coursesInfo, closeCoursesPopup } from './constants';

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
    const coursesAdv = document.querySelector('.courses__advantages');

    /** TODO develop: переделать отображение попапа на копирование из template*/
    coursesItems.forEach(item => {
        item.addEventListener('click', function() {
            const thisCourse = this.getAttribute('data-course');
            const thisCourseTitle = this.querySelector('.courses__info').innerText;
            const thisCoursePrice = this.querySelector('.courses__price').innerText;
            const currentCoursesText = coursesInfo.find(item => item.name === thisCourse).text;
            const currentCoursesAdvs = coursesInfo.find(item => item.name === thisCourse).listItems;
            if (currentCoursesAdvs) {
                currentCoursesAdvs.forEach(advantage => {
                    const currentAdvantage = document.createElement('li');
                    currentAdvantage.innerText = advantage;
                    coursesAdv.append(currentAdvantage);
                });
            }
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

    coursesBackBtn.addEventListener('click',
     () => closeCoursesPopup(
        curtain,
        coursesTitle,
        coursesText,
        coursesCost,
        coursesInfoWrap,
        coursesBox,
        coursesPopup,
        coursesAdv,
        )
    );
}