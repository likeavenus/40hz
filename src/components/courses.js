import { coursesInfo, closeCoursesPopup } from './constants';

// export default function Courses() {
//     const coursesItems = document.querySelectorAll('.courses__item');
//     const coursesPopup = document.querySelector('.courses__popup');
//     const coursesTitle = document.querySelector('.courses__popup-title');
//     const coursesText = document.querySelector('.courses__text');
//     const coursesCost = document.querySelector('.courses__cost');
//     const coursesBackBtn = document.querySelector('.courses__back');
//     const coursesInfoWrap = document.querySelector('.courses__popup-wrap');
//     const coursesBox = document.querySelector('.courses__popup-box');
//     const curtain = document.querySelector('.curtain');
//     const coursesAdv = document.querySelector('.courses__advantages');

//     /** TODO develop: переделать отображение попапа на копирование из template*/
//     coursesItems.forEach(item => {
//         item.addEventListener('click', function() {
//             const thisCourse = this.getAttribute('data-course');
//             const thisCourseTitle = this.querySelector('.courses__info').innerText;
//             const thisCoursePrice = this.querySelector('.courses__price').innerText;
//             const currentCoursesText = coursesInfo.find(item => item.name === thisCourse).text;
//             const currentCoursesAdvs = coursesInfo.find(item => item.name === thisCourse).listItems;
//             if (currentCoursesAdvs) {
//                 currentCoursesAdvs.forEach(advantage => {
//                     const currentAdvantage = document.createElement('li');
//                     currentAdvantage.innerText = advantage;
//                     coursesAdv.append(currentAdvantage);
//                 });
//             }
//             coursesPopup.classList.add('active');
            
//             setTimeout(() => {
//                 coursesTitle.innerText = thisCourseTitle;
//                 coursesText.innerText = currentCoursesText;
//                 coursesCost.innerText = thisCoursePrice;
//                 coursesInfoWrap.classList.add('active');
//                 coursesBox.classList.add('active');
//             }, 500);
//         })
//     });

//     
// }
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
    const coursesBox = document.querySelector('.courses__popup-box');
    const main = document.querySelector('.main');

    /** создаем переменную для хранения текущего скролла,
     *  для того что бы можно было навесить на main diplay: none;
     *  и не потерять текущее значение скролла  */
    let pageYOffset;

    coursesItems.forEach(item => {
        item.addEventListener('click', function() {
            const thisCourseData = this.getAttribute('data-course');
            const thisCourse = coursesInfo.find(item => item.name === thisCourseData);
            courseElement.innerHTML = '';

            for (let child of this.children) {
                courseElement.appendChild(child.cloneNode(true));
            }

            coursesTitle.innerText = thisCourse.title;
            coursesText.innerText = thisCourse.text;
            coursesPopup.classList.add('active');

            /** сохраняем текущий скролл  */
            pageYOffset = window.pageYOffset;
            
            setTimeout(() => {
                main.style.display = 'none';
                coursesBackBtn.style.display = 'block';
                coursesBox.append(popupContent);
                coursesInfoWrap.classList.add('active');
                coursesBox.classList.add('active');
            }, 500);
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
        )
    );
}