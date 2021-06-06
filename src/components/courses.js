export default function Courses() {
    const coursesItems = document.querySelectorAll('.courses__item');
    const coursesPopup = document.querySelector('.courses__popup');

    coursesItems.forEach(item => {
        item.addEventListener('click', function() {
            const thisCourse = this.getAttribute('data-course');
            coursesPopup.classList.add('active');

            
        })
    })

}