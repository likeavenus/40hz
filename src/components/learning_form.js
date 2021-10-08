export default function LearningForm() {
	const learningFormBtn = document.getElementById('submit');
	const learningForm = document.querySelector('.about__form');
	const formPopup = document.querySelector('.contact__popup');
	const formPopupTitle = document.querySelector('.contact__popup-title');

	learningFormBtn.addEventListener('click', async (e) => {

		e.preventDefault();
		const response = await fetch('/learning.php', {
			method: 'POST',
			body: new FormData(learningForm)
		});
		learningForm.reset();

		const result = await response;
		if (result.ok) {
			formPopupTitle.innerText = 'Спасибо! Мы скоро свяжемся с вами!';
			fbq('track', 'Lead');
			formPopup.classList.add('active');
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