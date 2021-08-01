export default function Form() {
    const form = document.querySelector('.contact__form');
    const formPopup = document.querySelector('.contact__popup');
    const formPopupTitle = document.querySelector('.contact__popup-title');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const response = await fetch('/mail.php', {
            method: 'POST',
            body: new FormData(form)
        });
        const result = await response;
        console.log(result)
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