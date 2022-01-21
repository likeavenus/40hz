export default function LearningForm() {
	const learningFormBtn = document.getElementById('submit');
	const learningForm = document.querySelector('.about__form');
	const formPopup = document.querySelector('.contact__popup');
	const formPopupTitle = document.querySelector('.contact__popup-title');
	const nameInput = document.querySelector('#name');
	const phoneInput = document.querySelector('#phone');
	const mailInput = document.querySelector('#mail');
	const sendBtn = document.querySelector('.send__about');

	const mailRegEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

	learningForm.addEventListener('input', () => {
		console.log(mailRegEx.test(mailInput.value))
		if (nameInput.value && phoneInput.value && mailRegEx.test(mailInput.value)) {
			sendBtn.removeAttribute('disabled');
		} else {
			sendBtn.setAttribute('disabled', true);
		}
	})

	learningFormBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const response = await fetch('/learning.php', {
			method: 'POST',
			body: new FormData(learningForm)
		});

		const result = await response;
		if (result.ok) {
			formPopupTitle.innerText = 'Спасибо! Мы скоро свяжемся с вами!';
			fbq('track', 'Lead');
			formPopup.classList.add('active');
			learningForm.reset();
			setTimeout(() => {
				formPopup.classList.remove('active');
				formPopupTitle.innerText = '';
			}, 1600);
		} else {
			formPopupTitle.innerText = 'Произошла ошибка, попробуйте позднее!';
			formPopup.classList.add('active');
			setTimeout(() => {
				formPopup.classList.remove('active');
				formPopupTitle.innerText = '';
			}, 1500);
		}
	})
}