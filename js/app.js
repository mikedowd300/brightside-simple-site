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
  'current-litters': 'Current and Upcoming Litters',
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
  'max': ['momo.PNG', 'momo-2.PNG', 'nilla.PNG', 'nilla-2.PNG'],
  'buddy': ['buddy.PNG', 'buddy-show.PNG', 'buddy-snow.JPG'],
  'landing-page': ['fireside-puppies.jpg', 'two-cute.jpg', 'puppy-on-cushion.JPG', 'adorbs.jpg']
}

let slideShowInterval;

const currentLittersData = [litter1, litter2];

const navigate = target => {
  if(slideShowInterval) {
    clearInterval(slideShowInterval);
  }
  const pages = ['home', 'current-litters', 'studs', 'femails'];
  const filteredPages = pages.filter(page => page !== target);  
  document.getElementById(target).style.setProperty('display', 'flex');
  filteredPages.forEach(page => document.getElementById(page).style.setProperty('display', 'none'));
  header.innerHTML = heaterTextMap[target];
  tagLine.innerHTML = tagLineTextMap[target];
  window.scrollTo(0, 0);
}

const slideShow = (target, interval = 4000) => {
  let count = 0;
  if(slideShowInterval) {
    clearInterval(slideShowInterval);
  }
  let opacity = 0;
  const file = 'assets'; 
  const slides = slideShowMap[target];
  const elem = document.getElementsByClassName(target)[0];
  const elem2 = document.getElementsByClassName(target + '-2')[0];
  elem2.setAttribute('src', `${file}/${slides[1]}`);
  elem.style.setProperty('opacity', opacity);
  slideShowInterval = setInterval(() => {
    opacity = opacity === 1 ? 0 : 1;
    count++;
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
    if(count === slides.length * 2) {
      clearInterval(slideShowInterval);
      count = 0;
    }
  }, interval);
}

expand = (elem) => {
  const parent = elem.parentElement;
  const icon = elem.getElementsByClassName('material-symbols-outlined')[0]
  const content = parent.getElementsByClassName('scrollable-content')[0]
  console.log(elem);
  console.log(parent);
  console.log(content);
  console.log([...parent.classList]);
  console.log([...content.classList]);
  if([...content.classList].includes('open')) {
    content.classList.remove('open');
    content.classList.add('closed');
    icon.innerHTML = "expand_more"
  } else {
    content.classList.remove('closed');
    content.classList.add('open');
    icon.innerHTML = "expand_less"
  }

}

// TODOS 
// ________________________________________
// - SLIDESHOW, 
//   1) ADD A FADEIN / FADEOUT AFFECT **** DONE ****
//   2) STOP SLIDESHOW **** DONE ****
//   3) POSITION SLIDESHOW BUTTONS
// ________________________________________
// - ACCORDION
//   1) get parent element with class "closed-accordion-wrapper", if it has class open, then remove it and replace it with closed, and viceversa
//   2) get parent element sybling with class "scrollable-content", swap open class with closed class
//   3) close the expanded accordion item with an "X" inside the content
// ________________________________________
// - OUR BOYS
// ________________________________________
// - OUR GIRLS