const arrLang = {
    'en': {
        'home': 'Home',
        'about': 'About me',
        'footer': 'Contact',

        'cover__title-1': 'Do you need a web page?',
        'cover__title-2': 'You are in the right place!',
        'cover__title-3': 'Im glad to see you!',

        'about__text-1': 'My passion is programming.',
        'about__text-2': 'It motivates me a lot to develop my ideas.',
        'about__text-3': 'Always grow professionally.',

        'footer__title': 'Thank you for your visit!',
        'footer__contact': 'Contact me',
        'footer__subtitle': 'Lets get to work',
        'footer__design': 'Designed by Andrii Pap',
        'footer__state': 'Based in your world',
    },
    'ru': {
        'home': 'Главная',
        'about': 'Обо мне',
        'footer': 'Контакт',

        'cover__title-1': 'Тебе нужна веб-страница?',
        'cover__title-2': 'Ты находишься в нужном месте!',
        'cover__title-3': 'Я рад тебя видеть!',

        'about__text-1': 'Я увлечен программированием.',
        'about__text-2': 'Меня очень мотивирует развивать свои идеи.',
        'about__text-3': 'Всегда расти профессионально.',

        'footer__title': 'Спасибо за визит!',
        'footer__contact': 'Свяжись со мной',
        'footer__subtitle': 'Давай приступим к работе',
        'footer__design': 'Дизайн Андрея Пап',
        'footer__state': 'Находится в вашем мире',
    },
    'es': {
        'home': 'Principal',
        'about': 'Sobre mi',
        'footer': 'Contacto',

        'cover__title-1': '¿Necesitas una página web?',
        'cover__title-2': '¡Estás en el lugar correcto!',
        'cover__title-3': '¡Me alegro verte!',

        'about__text-1': 'Soy un apasionado de programación.',
        'about__text-2': 'Me motiva mucho desarrollar mis ideas.',
        'about__text-3': 'Crecer siempre profesionalmente.',

        'footer__title': '¡Gracias por tu visita!',
        'footer__contact': 'Contacta conmigo',
        'footer__subtitle': 'Pongamonos manos a la obra',
        'footer__design': 'Diseñado por Andrii Pap',
        'footer__state': 'Basado en tu mundo',
    }
};

const btnLangEn = document.getElementById('lang__en');
const btnLangRu = document.getElementById('lang__ru');
const btnLangEs = document.getElementById('lang__es');

btnLangEn.addEventListener('click', setLang.bind(null, 'en'));
btnLangRu.addEventListener('click', setLang.bind(null, 'ru'));
btnLangEs.addEventListener('click', setLang.bind(null, 'es'));

function setLang(lang) {
    if (!arrLang.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty('localStorage')) {
        window.localStorage.setItem('lang', lang);
    }

    if (window.localStorage.getItem('lang', lang) == 'en') {
        btnLangEs.classList.remove('selected');
        btnLangRu.classList.remove('selected');
        btnLangEn.classList.add('selected');
    }
    if (window.localStorage.getItem('lang', lang) == 'ru') {
        btnLangEs.classList.remove('selected');
        btnLangEn.classList.remove('selected');
        btnLangRu.classList.add('selected');
    }
    if (window.localStorage.getItem('lang', lang) == 'es') {
        btnLangEn.classList.remove('selected');
        btnLangRu.classList.remove('selected');
        btnLangEs.classList.add('selected');
    }

    let links = document.querySelectorAll('.lang');
    links.forEach(el => {
        el.innerText = arrLang[lang][el.getAttribute('key')];
    })
}

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'es';
setLang(lang);