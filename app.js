let modalState = false;
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

const toggleModal = contentId => {
  const display = modalState ? 'flex' : 'none';
  modalState = !modalState;
  modal.style.setProperty('display', display);
  modalContent.innerHTML = modalContentMap[contentId];
}

const modalContentMap = {
  puppy: 'Puppy Ipsum et puppy fecis...',
  other: 'Bruce ipsim, OG ipsum ...'
}

const navigate = target => {
  console.log(target);
  const pages = ['home', 'current-litters', 'studs', 'femails'];
  const filteredPages = pages.filter(page => page !== target);  
  const modal = document.getElementById(target).style.setProperty('display', 'flex');
  filteredPages.forEach(page => document.getElementById(page).style.setProperty('display', 'none'))
}