export default function Welcome () {
    const buttonPopupElem = document.querySelector('.js-open-popup');
    const mainElem = document.querySelector('.main');
    const popupElem = document.querySelector('.js-popup');
    const closeButtonElem = document.querySelector('.button__close');
    const header = document.querySelector('.header');
    const btnAbout = document.querySelector('.btn__about');
    const popupAboutList = document.querySelector('.popup__about');
    const submitBtn = document.querySelector('.send__about');

    buttonPopupElem.addEventListener('click', () => {
        mainElem.classList.add('main--blured', 'main--cropped');
        popupElem.classList.add('popup--active');
        header.classList.add('header--hidden');
    });

    closeButtonElem.addEventListener('click', () => {
        mainElem.classList.remove('main--blured', 'main--cropped');
        popupElem.classList.remove('popup--active');
        header.classList.remove('header--hidden');
    });

    btnAbout.addEventListener('click', () => {
        btnAbout.classList.toggle('active');
        popupAboutList.classList.toggle('active');
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
}
