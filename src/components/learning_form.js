export default function LearningForm() {
	const learningFormBtn = document.getElementById('submit');
	const learningForm = document.querySelector('.about__form');
	const formPopup = document.querySelectorAll('.contact__popup');
	const formPopupTitle = document.querySelectorAll('.contact__popup-title');

	learningFormBtn.addEventListener('click', async (e) => {

		e.preventDefault();
		const response = await fetch('/learning.php', {
			method: 'POST',
			body: new FormData(learningForm)
		});
		learningForm.reset();

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