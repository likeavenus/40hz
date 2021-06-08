export const coursesInfo = [
    {
        name: 'dj',
        text: 'Курс по большей степени рассчитан на новичков, но мы с радостью сможем помочь и тем, кто уже когда-то занимался Диджеингом, и хочет освежить знания. Для этого мы разработаем индивидуальную программу специально для Вас',
        listItems: [
            'Бесплатная практика и возможность записать свой лайв-сет или видео-сет',
            'Обучение на современном и актуальном оборудовании Pioneer',
            'После успешного прохождения курса у вас будет возможность продемонстрировать свои навыки на сцене клуба или в прямом эфире на радио.',
        ]
    },
    {
        name: 'basic',
        text: '10 занятий/10 часов. (Курс рассчитан на 3 месяца обучения)',
    }
];

export const closeCoursesPopup = (curtain, coursesTitle, coursesText, coursesCost, coursesInfoWrap, coursesBox, coursesPopup) => {
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
};