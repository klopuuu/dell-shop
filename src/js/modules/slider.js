export function slider() {

    const slider = document.querySelector('.offers__slider-wrapper');
    const container = document.querySelector('.offers__slider-container')
    const slides = slider.querySelectorAll('.offers__slide');
    const dotes = document.querySelector('.offers__dotes');

    let slideIndex = 0
    let position = 0;
    const itemWidth = container.offsetWidth;

    dotes.addEventListener('click', showDotesSlide)

    function translateSlide() {

        position = -(itemWidth * slideIndex)

        slider.style.transform = `translateX(${position}px)`;

    }


    function showDotesSlide() {

        if (slideIndex < slides.length - 1) {
            slideIndex = slideIndex + 1
        } else {
            slideIndex = 0
        }

        translateSlide()
        activeDotes()

    }

    function activeDotes() {

        const dote = document.querySelectorAll('.dote');
        dote.forEach((item, index) => {
            if (index === slideIndex) {
                item.classList.add('dote__active')
            } else {
                item.classList.remove('dote__active')
            }
        })
    }

    function createDotes() {

        slides.forEach(() => {

            let element = document.createElement('div');
            element.classList.add('dote')
            dotes.append(element)
        })

        activeDotes()
    }

    createDotes();

    setInterval(function () {
        dotes.click();
    }, 5000);
}