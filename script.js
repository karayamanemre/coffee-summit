const body = document.querySelector('body');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuList = document.getElementById('mobile-menu-list');
const mobileMenuLinks = document.querySelectorAll('.mobile-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenuList.classList.toggle('active');
  body.classList.toggle('overflow');
  mobileMenu.classList.toggle('active');
});

mobileMenuLinks.forEach((link) => link.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenuList.classList.toggle('active');
  body.classList.toggle('overflow');
}));

const speakerList = [
  {
    speakerName: 'Filippa Noela',
    job: 'Owner of Sea ​​of ​Coffee',
    info: 'Filippa knows a lot about coffee.',
    image: 'img/speaker1.jpeg',
  },
  {
    speakerName: 'Teresa Pari',
    job: 'Consultant of Coffee World',
    info: 'Teresa is consulting since 9.',
    image: 'img/speaker2.jpeg',
  },
  {
    speakerName: 'Heli Dragica',
    job: 'Waiter at Ottoman Coffee Shop',
    info: 'Heli likes coffee a lot.',
    image: 'img/speaker3.jpeg',
  },
  {
    speakerName: 'Scholastique Elva',
    job: 'Barista at Starbucks',
    info: 'He likes trains.',
    image: 'img/speaker4.jpeg',
  },
  {
    speakerName: 'Legolas Thranduil',
    job: 'Owner of Eye Coffee',
    info: 'Very talented at roasting.',
    image: 'img/speaker5.jpeg',
  },
  {
    speakerName: 'Vera Vale',
    job: 'Owner of Coffee Genius',
    info: 'Coffee enthusiast.',
    image: 'img/speaker6.jpeg',
  },
];
const speakers = document.querySelector('.speaker-list');
Array.from(speakers.children).forEach((child, index) => {
  child.innerHTML = `
      <div class="image-box">
        <img class="speaker-image" src="${speakerList[index].image}">
      </div>
      <div class="speaker-info">
        <p class="speaker-name">${speakerList[index].speakerName}</p>
        <p class="title">${speakerList[index].job}</p>
        <hr class="gray">
        <p>${speakerList[index].info}</p>
      </div>
    `;
});