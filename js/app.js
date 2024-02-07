let modalState = false;
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const header = document.getElementById('header-title');
const tagLine = document.getElementById('tag-line-text');

const toggleModal = contentId => {
  const display = modalState ? 'flex' : 'none';
  modalState = !modalState;
  modal.style.setProperty('display', display);
  modalContent.innerHTML = modalContentMap[contentId];
}

const modalContentMap = {
  puppy: 'Puppy Ipsum et puppy fecis...',
  other: 'Bruce ipsim, OG ipsum ...'
};

const heaterTextMap = {
  'home': 'Some awesome cool title goes here!',
  'current-litters': 'Current Litters',
  'studs': 'Our Boys',
  'femails': 'Our Girls'
};

const tagLineTextMap = {
  'home': 'maybe a tagline goes here',
  'current-litters': 'maybe a tagline doesnt go here',
  'studs': '',
  'femails': ''
}

const slideShowMap = {
  'thor': ['adorbs.jpg', 'flower-puppies-sleeping.PNG', 'two-cute.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'cap': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'heavy-d': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'hulk': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'rocket': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'star-lord': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'spidey': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'gamora': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'loki': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'samuel': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
  'taco': ['flower-puppies-sleeping.PNG', 'two-cute.jpg', 'adorbs.jpg', 'nilla.PNG', 'buddy.PNG', 'pumpkin-puppy.jpg'],
}

const currentLittersData = [litter1, litter2];

const navigate = target => {
  const pages = ['home', 'current-litters', 'studs', 'femails'];
  const filteredPages = pages.filter(page => page !== target);  
  document.getElementById(target).style.setProperty('display', 'flex');
  filteredPages.forEach(page => document.getElementById(page).style.setProperty('display', 'none'));
  header.innerHTML = heaterTextMap[target];
  tagLine.innerHTML = tagLineTextMap[target];
  window.scrollTo(0, 0);
}

const slideShow = (target, interval = 4000) => {
  let opacity = 0;
  const file = 'assets'; 
  const slides = slideShowMap[target];
  const elem = document.getElementsByClassName(target)[0];
  const elem2 = document.getElementsByClassName(target + '-2')[0];
  elem2.setAttribute('src', `${file}/${slides[1]}`);
  elem.style.setProperty('opacity', opacity);
  setInterval(() => {
    opacity = opacity === 1 ? 0 : 1;
    elem.style.setProperty('opacity', opacity);
    setTimeout(() => {
      console.log('timeout');
      if(opacity === 0) {
        elem.setAttribute('src', `${file}/${slides[0]}`);
      } else if(opacity === 1) {
        elem2.setAttribute('src', `${file}/${slides[0]}`);
      }
      slides.unshift(slides.pop());
    }, interval / 2);
  }, interval);
}

// TODOS 
// ________________________________________
// - SLIDESHOW, 
//   1) ADD A FADEIN / FADEOUT AFFECT
//   2) STOP SLIDESHOW
//   3) POSITION SLIDESHOW BUTTONS
// ________________________________________
// - OUR BOYS
// ________________________________________
// - OUR GIRLS