const hotDate = "December 31 2021 00:00:00 GMT+0300";

function getTimeOut(hotDate) {
    const t = Date.parse(hotDate) - Date.parse(new Date());
        daysLeft = Math.floor(t / (1000 * 60 * 60 * 24)),
        hoursLeft = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutesLef = Math.floor((t / (1000 * 60)) % 60),
        secondsLeft = Math.floor((t / 1000)%60);
    return {
        'total': t,
        'daysLeft': daysLeft,
        'hoursLeft': hoursLeft,
        'minutesLeft': minutesLef,
        'secondsLeft': secondsLeft
    };
}

let ggg = getTimeOut(hotDate);

function setTimer(selector, hotDate) {
    const timer = document.querySelector(selector),
    daysLeft = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
        const t = getTimeOut(hotDate);

        daysLeft.innerHTML = t.daysLeft;
        hours.innerHTML = t.hoursLeft;
        minutes.innerHTML = t.minutesLeft;
        seconds.innerHTML = t.secondsLeft;

        if ( t.total <=0) {
            clearInterval(timeInterval);
        }
};

}
setTimer('.timer-container', hotDate);

///slider

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
let slideIndex = 1;

let currentSlide = document.querySelector('#current');

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => slide.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';

    currentSlide.innerHTML = slideIndex;
}

function plusSlide(n) {
    showSlides(slideIndex += n);  
}

prevButton.addEventListener('click', () => {
    plusSlide(-1);
    console.log('click -');
});

nextButton.addEventListener('click', () => {
    plusSlide(1);
    console.log('click +');
});

showSlides(slideIndex);

