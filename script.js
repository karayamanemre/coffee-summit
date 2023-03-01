const bodyElement = document.querySelector('body');
const burgerElement = document.getElementById('burger');
const mobileMenuElement = document.getElementById('mobile-menu');
const mobileMenuListElement = document.getElementById('mobile-menu-list');
const mobileMenuLinksElements = document.querySelectorAll('.mobile-links');
const topButtonElement = document.getElementById('back-to-top');

function handleScroll() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButtonElement.style.display = 'block';
  } else {
    topButtonElement.style.display = 'none';
  }
}

window.addEventListener('scroll', handleScroll);

function handleTopButtonClick() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButtonElement.addEventListener('click', handleTopButtonClick);

burgerElement.addEventListener('click', () => {
  burgerElement.classList.toggle('active');
  mobileMenuListElement.classList.toggle('active');
  bodyElement.classList.toggle('overflow');
  mobileMenuElement.classList.toggle('active');
});

mobileMenuLinksElements.forEach((linkElement) =>
  linkElement.addEventListener('click', () => {
    burgerElement.classList.toggle('active');
    mobileMenuListElement.classList.toggle('active');
    bodyElement.classList.toggle('overflow');
  }),
);

const speakerList = [
  {
    speakerName: 'Filippa Noela',
    job: 'Owner of Sea of Coffee',
    info: 'Filippa knows a lot about coffee.',
    image: 'img/speaker1.jpeg',
  },
  {
    speakerName: 'Teresa Pari',
    job: 'Coffee World Consultant',
    info: 'Teresa has been consulting for 9 years.',
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

const speakerListElement = document.querySelector('.speaker-list');
Array.from(speakerListElement.children).forEach((childElement, index) => {
  childElement.innerHTML = `
    <div class="image-box">
      <img class="speaker-image" src="${speakerList[index].image}" alt="${speakerList[index].speakerName} photo">
    </div>
    <div class="speaker-info">
      <p class="speaker-name">${speakerList[index].speakerName}</p>
      <p class="title">${speakerList[index].job}</p>
      <hr class="gray">
      <p>${speakerList[index].info}</p>
    </div>
  `;
});
