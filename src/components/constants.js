export const coursesInfo = [
    {
        name: 'dj',
        title: 'Диджеинг',
        text: 'Курс по большей степени рассчитан на новичков, но мы с радостью сможем помочь и тем, кто уже когда-то занимался Диджеингом, и хочет освежить знания. Для этого мы разработаем индивидуальную программу специально для Вас',
        listItems: [
            'Бесплатная практика и возможность записать свой лайв-сет или видео-сет',
            'Обучение на современном и актуальном оборудовании Pioneer',
            'После успешного прохождения курса у вас будет возможность продемонстрировать свои навыки на сцене клуба или в прямом эфире на радио.',
        ]
    },
    {
        name: 'basic',
        title: 'Базовый курс',
        text: '10 занятий/10 часов. (Курс рассчитан на 3 месяца обучения)',
        listItems: [
            'Уроки от лучших преподавателей в России, издающихся на топовых зарубежных и отечественных лейблах!',
            'Индивидуальный подход к каждому ученику!',
            'Ваш уровень знаний не имеет никакого значения! Обучение с 0.',
            'Возможность Online обучения!',
            'Все уроки записываются! Ты сможешь в любой момент освежить в памяти вновь приобретенные знания.',
            'Мы не теряем связь с нашими студентами даже после окончания курса.',
            'Поможем тебе издать твой трек на лейбле.',
            'Познакомишься с основами музыкальной теории, и грамоты.',
            'Узнаешь про все современные тенденции в музыкальной индустрии.',
            'Уже после первых занятий ты сможешь написать свой первый трек или минусовку.',
        ]
    },
    {
        name: 'pro-course',
        title: 'PRO курс',
        text: '20 занятий/ 20 часов. (Курс рассчитан на 6 месяцев обучения). <br/><br/> Этот расширенная версия Базового курса. Для людей готовых на 100% посвятить свою жизнь музыки. Так как этот курс включает в себя большее количество часов, у преподавателя есть возможность уделить больше времени разбору ваших работ, плюс появляется возможность увидеть за тем как работает профессионал над треком от начала и до финальной стадии. <br/><br/> Постоянная связь и консультация по любым вопросам с преподавателем вне учебное время (только на время курса) Пожизненная скидка на услуги школы',
        listItems: [    
            'Уроки от лучших преподавателей в России, издающихся на топовых зарубежных и отечественных лейблах!',
            'Индивидуальный подход к каждому ученику!',
            'Ваш уровень знаний не имеет никакого значения! Обучение с 0.',
            'Возможность Online обучения!',
            'Все уроки записываются! Ты сможешь в любой момент освежить в памяти вновь приобретенные знания.',
            'Мы не теряем связь с нашими студентами даже после окончания курса.',
            'Поможем тебе издать твой трек на лейбле.',
            'Познакомишься с основами музыкальной теории, и грамоты.',
            'Узнаешь про все современные тенденции в музыкальной индустрии.',
            'Уже после первых занятий ты сможешь написать свой первый трек или минусовку.',
        ]
    },
    {
        name: 'online-course',
        title: 'Онлайн курс',
        text: 'Все то же самое что и Базовый курс. Обучение проходит индивидуально с преподавателем Online через через сервис Zoom. Вы не приезжаете на студию.</br></br> Для обучения нужны: </br>',
        listItems: [
            'Компьютер',
            'Микрофон',
            'Наушники',
            'Стабильное интернет соединение',
        ]
    },
    {
        name: 'pump',
        title: 'Прокачай мой трек!',
        text: 'Ты вроде уже все перепробовал, но черт побери, не звучит как у твоего любимого топового артиста? Не беда, приятель. Мы выжмем последние соки из твоего проекта, не нарушая идею и концепцию. <br/> <br/> Мы не беремся за все подряд, но не переживай, ты как минимум бесплатно получишь дельный совет. Будь уверен.',
        listItems: []
    },
    {
        name: 'minus',
        title: 'Написание минуса',
        text: 'Напишем вам минусовку или полноценный трек абсолютно в любом жанре музыки. <br/> <br/> Написание минусовки на заказ довольно сложный процесс. Вы присылаете нам референс треки (от 5 штук), мы анализируем материал, на основе полученных данных создаем несколько макетов будущей минусовки. После вашего одобрения и выбора конкретного макета, мы доделываем минусовку полностью, включая ваши пожелания по длительности и составу отдельных частей будущей композиции. <br/> <br/> На выходе вы получаете оригинальный материал, звучащий качественно, лучше или как минимум на уровне зарубежных исполнителей!',
        listItems: [
            'Делается до 3х поправок',
            'Первая поправка бесплатно',
            'Последующие за одну 500 рублей',
        ]
    },
    {
        name: 'mastering',
        title: 'Мастеринг',
        text: 'Мастеринг трека от «40Hz» это знак качества! <br/> <br/> Мастеринг - инженер с более чем пятнадцатилетним опытом работы, вытащит звук вашей композиции на качественно новый уровень.',
        listItems: []
    }
];

export const closeCoursesPopup = (curtain, coursesInfoWrap, coursesBox, coursesPopup, main, pageYOffset, coursesBackBtn) => {
    curtain.className += ' animate';
    setTimeout(() => {
        coursesBackBtn.style.display = 'none';
        coursesInfoWrap.classList.remove('active');
        coursesBox.classList.remove('active');
        main.classList.remove('main--hidden');
        window.scrollTo(0, pageYOffset);
    }, 500);

    setTimeout(() => {
        coursesPopup.classList.remove('active');
        curtain.classList.remove('animate');
    }, 1000);
};