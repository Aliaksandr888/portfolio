const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
};
const portfolioBtnWinter = document.querySelector('#winter');
const portfolioBtnSpring = document.querySelector('#spring');
const portfolioBtnSummer = document.querySelector('#summer');
const portfolioBtnAutumn = document.querySelector('#autumn');
let portfolioImage = document.querySelectorAll('.portfolio_photos__img1');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const btnRu = document.querySelector('.ru');
const btnEn = document.querySelector('.en');
const btnRuEng = document.querySelectorAll('.btn-ru-eng');
const portfolioBtn = document.querySelectorAll('.portfolio_buttons__btn');
portfolioBtnAutumn.classList.add('active');
const moon = document.querySelector('.moon');


//меняем картинки
portfolioBtn.forEach((elem) => elem.addEventListener("click", changeImage, true));

function changeImage() {
    portfolioImage.forEach((img, index) => img.src = `assets/img/${this.id}/${index + 1}.jpg`);
    portfolioBtn.forEach((elem) => elem.classList.remove('active'));
    this.classList.add('active');
};

//кэшируем картинки
function preloadSummerImages(seasons) {
    for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `assets/img/${seasons}/${i}.jpg`;
    }
}
seasons.forEach((index) => preloadSummerImages(index))

//перевод страницы
function getTranslateRu(){
let translate = document.querySelectorAll('[data-translate]')
translate.forEach((elem)=> elem.innerHTML = i18Obj.ru[elem.dataset.translate])
translate.innerHTML = i18Obj.ru[translate.dataset.translate]
}
function getTranslateEn(){
    let translate = document.querySelectorAll('[data-translate]');
    translate.forEach((elem)=> elem.innerHTML = i18Obj.en[elem.dataset.translate])
    translate.innerHTML = i18Obj.en[translate.dataset.translate]
    lang = 'en';
    }
    btnRu.addEventListener('click', getTranslateRu);
    btnEn.addEventListener('click', getTranslateEn);

    //смена цвета активной кнопки языка
  function addActiveLanguage(){
    btnRuEng.forEach((elem) => elem.classList.remove('active_language'));
    this.classList.add('active_language');
    lang = 'ru';
  }
  btnEn.classList.add('active_language');
  btnRu.addEventListener('click', addActiveLanguage);
  btnEn.addEventListener('click', addActiveLanguage);

  //смена фогнового цвета
  const body = document.body
  const container = document.querySelectorAll('.container');
  const section = document.querySelectorAll('.section');
  const sectionTitle = document.querySelectorAll('.section-title');
  const skillTitle = document.querySelector('.skills_title');
  const portfolioTitle = document.querySelector('.portfolio_title');
  const videoTitle = document.querySelector('.video_title');
  const priceTitle =document.querySelector('.price_title');
  const title = [skillTitle, portfolioTitle, videoTitle, priceTitle];
 const skillName = document.querySelectorAll('.skill-name');
 const skillDescription =document.querySelectorAll('.skill-description');
const priceList = document.querySelectorAll(".price-list");

function changeBackgroundColor(){
  priceList.forEach((elem)=> elem.classList.toggle('words_color'))
  portfolioBtn.forEach((elem)=> elem.classList.toggle('light-theme'))
  skillDescription.forEach((elem)=> elem.classList.toggle('words_color'))
  skillName.forEach((elem)=> elem.classList.toggle('words_color'))
   title.forEach((elem)=> elem.classList.toggle('light-theme'))
   sectionTitle.forEach((elem)=> elem.classList.toggle('title_light'))
   section.forEach((elem)=> elem.classList.toggle('light-theme'))
   container.forEach((elem)=> elem.classList.toggle('light-theme'))
 body.classList.toggle('light-theme')
 moon.classList.toggle('moon_color')
 if(body.className ==='light-theme'){
  theme= 'light';
 }else{
  theme= 'dark';
 }
}

moon.addEventListener('click', changeBackgroundColor);

//Дополнительный функционал: данные хранятся в local storage
let lang = 'en';
let theme= 'light';
 

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

console.log('Смена изображений в секции portfolio +25;\nПеревод страницы на два языка +25;\nПереключение светлой и тёмной темы +25;\n Итого: 75')