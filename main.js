document.addEventListener("DOMContentLoaded", function () {
    // Устанавливаем высоту для всех .slide
    var wHeight = window.innerHeight;
    var slides = document.querySelectorAll('.slide');
    slides.forEach(function (slide) {
        slide.style.height = wHeight + "px";
    });

    // Функция для проверки, находится ли элемент в зоне видимости
    function isInView(elem, offset = -50) {
        var rect = elem.getBoundingClientRect();
        return rect.top + offset < window.innerHeight && rect.bottom > 0;
    }

    function onScroll() {
        slides.forEach(function (slide) {
            if (isInView(slide, -50)) {
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    // Вызов при загрузке страницы
    onScroll();


    // Обратный отсчет
const countdownElem = document.getElementById('countdown');
    // Дата: 6 августа 2025 года, 17:00
    const targetDate = new Date('2025-09-06T17:00:00');

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownElem.textContent = "Время наступило!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);

        countdownElem.textContent =
            `${days} д. ${hours} ч. ${minutes} мин.`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

 const params = new URLSearchParams(window.location.search);
    const guestName = params.get('guest');
    const greeting = document.getElementById('guestGreeting');
    if (greeting) {
        if (guestName && guestName.trim()) {
            greeting.textContent = `Дорогой(ая) ${guestName.replace(/</g, "&lt;").replace(/>/g, "&gt;")}, рады пригласить тебя на нашу свадьбу!`;
        } else {
            greeting.textContent = 'Дорогой гость, рады пригласить тебя на нашу свадьбу!';
        }
    }
});