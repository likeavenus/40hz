import Plyr from 'plyr';

export default function Welcome() {
    const buttonPopupElem = document.querySelector('.js-open-popup');
    const mainElem = document.querySelector('.main');
    const popupElem = document.querySelector('.js-popup');
    const closeButtonElem = document.querySelector('.button__close');
    const header = document.querySelector('.header');
    const btnAbout = document.querySelector('.btn__about');
    const popupAboutList = document.querySelector('.popup__about');
    const submitBtn = document.querySelector('.send__about');
    const welcomeSubtitle = document.querySelector('.welcome__subtitle');
    const formAbout = document.querySelector('.about__form');
	const formPopupTitle = document.querySelector('.contact__popup-title');
	const formPopup = document.querySelector('.contact__popup');


    const onPopupOpened = (action) => {
        if (action === 'add') {
            mainElem.classList.add('main--blured', 'main--cropped');
            popupElem.classList.add('popup--active');
            header.classList.add('header--hidden');
            welcomeSubtitle.classList.add('welcome__subtitle--hidden');
            buttonPopupElem.classList.add('open-popup--hidden');
        } else {
            mainElem.classList.remove('main--blured', 'main--cropped');
            popupElem.classList.remove('popup--active');
            header.classList.remove('header--hidden');  
            welcomeSubtitle.classList.remove('welcome__subtitle--hidden');
            buttonPopupElem.classList.remove('open-popup--hidden');
        }
    }

    buttonPopupElem.addEventListener('click', () => onPopupOpened('add'));
    closeButtonElem.addEventListener('click', () => onPopupOpened('remove'));

    btnAbout.addEventListener('click', () => {
        btnAbout.classList.toggle('active');
        popupAboutList.classList.toggle('active');
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })


    const player = new Plyr('#player', {
        controls: [],
        autoplay: true,
        muted: true,
        loop: {
            active: true,
        }
    });

    formAbout.addEventListener('submit', async (e) => {
        e.preventDefault();
        const response = fetch('/learning.php', {
            method: 'POST',
            body: new FormData(formAbout)
        });
        const result = await response;
        if (result.ok) {
            formPopupTitle.innerText = 'Данные успешно отправлены!';
			formPopup.classList.add('active');
			setTimeout(() => {
				formPopup.classList.remove('active');
				formPopupTitle.innerText = '';
			}, 1300);
        } else {
            formPopupTitle.innerText = 'Произошла ошибка, попробуйте позднее!';
			formPopup.classList.add('active');
			setTimeout(() => {
				formPopup.classList.remove('active');
				formPopupTitle.innerText = '';
			}, 1300);
        }
    })
}
