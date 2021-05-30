export default function Welcome () {
    const buttonPopupElem = document.querySelector('.js-open-popup');
    const mainElem = document.querySelector('.main');
    const popupElem = document.querySelector('.js-popup');
    const closeButtonElem = document.querySelector('.button__close');

    buttonPopupElem.addEventListener('click', () => {
        mainElem.classList.add('main--blured');
        popupElem.classList.add('popup--active');
    });

    closeButtonElem.addEventListener('click', () => {
        mainElem.classList.remove('main--blured');
        popupElem.classList.remove('popup--active');
    });
}
