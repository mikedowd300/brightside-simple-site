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

const aboutUs = [
  'Here at Brightside, our goal is simple but lofty! To raise the “Cream of the Creams”: ideal family members, with a sweet, trainable, therapy type temperament, correct “European standard” conformation, and thorough health and genetic testing to help them live their best life with their forever families!',

  'We undertake several different protocols to help our pups become ideal family members. We socialize our pups with our extended family and friends, and practice Early Neurological Stimulation, which has many benefits, among them a more graduated stress response in your adult dog, improved trainability, and a stronger immune system, as well as starting them on potty training, and name recall.',

  'Our parents have all their health clearances (hips, elbows, eyes and heart) and genetic testing done for the 11 most common genetic diseases which affect Goldens, so pups are guaranteed clear/unaffected, including for NCL, and both ICT 1 & 2 (the recently discovered, nastier version of ICT in Goldens.)',

  'We offer a health guarantee and pups go home throughly vet checked, with first shots and de-worming done.'
];

const rosieInfo = {
  nickName: 'Rosie',
  fullName: "Brightside’s A Sterling Moon Rose",
  akc: 'AKC#: SS30529306',
  hips: 'OFA hip: EXCELLENT',
  elbows: 'OFA elbow: NORMAL',
  heart: 'OFA heart (Practitioner) NORMAL',
  eyes: 'OFA eye (Opthomologist) NORMAL',
  geneticPanel: 'Genetic Panel: PRCD, PRA 1&2, DM, MD, NCL, ICT 1&2, RD, OI, CMS, DEB: ALL CLEAR',
  decsription: 'Rosie is our sweet home grown girl. She is the daughter of our foundation English female, sired by our imported European Champion. She passes along their awesome genetics, excellent structure, and the sweetest smile, that she is rarely without.'
};

const maxInfo = {
  nickName: 'Max',
  fullName: "Brightside’s Battle Born",
  akc: 'AKC#: SS32630201',
  hips: 'OFA hip: GOOD',
  elbows: 'OFA elbow: NORMAL',
  heart: 'OFA heart (cardiologist) NORMAL',
  eyes: 'OFA eye (ophthalmologist) NORMAL',
  geneticPanel: 'Genetic Panel: PRCD, PRA 1&2, DM, MD, NCL, ICT 1&2, RD, OI, CMS, DEB: ALL CLEAR',
  decsription: 'Max is our young up and coming male. He comes from recently imported European lines, 2 grandparents and 6 of 8 great grandparents are European champions. We are excited about all he brings: excellent health, a sweet nature, beautiful European type, and of course, that signature goofy Golden grin.'
};

const buddyInfo = {
  nickName: 'Buddy',
  fullName: 'Apollon of Golden Duck',
  championTitle: "Imported Champion of Serbia",
  akc: 'AKC#: SS06748101',
  hips: 'HIPS: FCI A/A',
  elbows: 'ELBOWS: FCI 0/0',
  heart: 'Heart: (Cardiologist) Normal',
  eyes: 'Eyes: (Opthomologist) Normal',
  geneticPanel: 'Genetic Panel: PRCD, PRA 1&2, DM, MD, NCL, ICT 1&2, RD, OI, CMS, DEB: ALL CLEAR',
  decsription: 'Buddy is our gorgeous imported European Champion male, 3 of his 4 grandparents are champions of multiple countries and pups are super typey: blocky, and fluffy. He also passes along a calm, trainable demeanor and his funny, sweet personality. He loves to give hugs.'
};

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
  'buddy': ['buddy/buddy-1.jpg', 'buddy/buddy-2.jpg', 'buddy/buddy-3.jpg', 'buddy/buddy-4.jpg', 'buddy/buddy-4.jpg'],
  'max': ['max/max-1.jpg', 'max/max-2.jpg', 'max/max-3.jpg', 'max/max-4.jpg', 'max/max-5.jpg'],
  'rosie': ['rosie/rosie-1.jpg', 'rosie/rosie-2.jpg', 'rosie/rosie-3.jpg', 'rosie/rosie-4.jpg', 'rosie/rosie-5.jpg'],
  'bailey': ['bailey/bailey-1.jpg', 'bailey/bailey-2.jpg'],
  'landing-page': ['landing-page/landing-page-2.jpg', 'landing-page/landing-page-3.jpg', 'landing-page/landing-page-4.jpg']
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

const slideShow = (target, interval = 4000, iterations = 2) => {
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
      if(opacity === 0) {
        elem.setAttribute('src', `${file}/${slides[0]}`);
      } else if(opacity === 1) {
        elem2.setAttribute('src', `${file}/${slides[0]}`);
      }
      slides.unshift(slides.pop());
    }, interval / 2);
    if(count === slides.length * iterations) {
      clearInterval(slideShowInterval);
      count = 0;
    }
  }, interval);
}

slideShow('landing-page', 3000, 10);

expand = (elem) => {
  const parent = elem.parentElement;
  const icon = elem.getElementsByClassName('material-symbols-outlined')[0]
  const content = parent.getElementsByClassName('scrollable-content')[0]
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

showContactUsModal = () => {
  const contactUsModal = document.getElementById('contact-us-modal');
  const classList = [ ...contactUsModal.classList];
  if(classList.includes('hidden')) {
    contactUsModal.classList.remove('hidden');
  } else {
    contactUsModal.classList.add('hidden');
  }
}

sendMessage = () => {
  const name = document.getElementById('contact-name').value;
  const phoneNumber = document.getElementById('contact-phone-number').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  const params = { name, email, message, phoneNumber };
  const templateId = "template_tgpkoog";
  const serviceId = "service_k0un4x3";
  emailjs.send(serviceId, templateId, params)
    .then((res) => {
      name.value = '';
      phoneNumber.value = '';
      email.value = '';
      message.value = '';
      showContactUsModal();
    })
    .catch((e) => console.log('ERROR', e));
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
// - OUR BOYS  **** DONE ****
// ________________________________________
// - OUR GIRLS