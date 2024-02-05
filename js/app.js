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

const currentLittersData = [litter1, litter2];

const navigate = target => {
  const pages = ['home', 'current-litters', 'studs', 'femails'];
  const filteredPages = pages.filter(page => page !== target);  
  const modal = document.getElementById(target).style.setProperty('display', 'flex');
  filteredPages.forEach(page => document.getElementById(page).style.setProperty('display', 'none'));
  header.innerHTML = heaterTextMap[target];
  tagLine.innerHTML = tagLineTextMap[target];
}