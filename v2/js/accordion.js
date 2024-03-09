const expand = elem => {
  // const el = [ ...elem.parentElement.childNodes].find(el => el.classList?.contains('accordion-full-content'));
  // if(el.classList.contains('expanded')) {
  //   el?.classList.remove('expanded');
  // } else {
  //   el?.classList.add('expanded');
  // }
}

const expandFaq = index => {
  // add expand class to current answer
  // hide expand button
  // show collapse button
  const faq = document.querySelectorAll('.faq-wrapper')[index];
  console.log(index);
  console.log(faq);
  faq.querySelector('.faq-answer-wrapper').classList.add('expanded');
  faq.querySelector('.expand-button').classList.add('hidden');
  faq.querySelector('.collapse-button').classList.remove('hidden');

}

const collapseFaq = index => {
  // add expand class to current answer
  // hide expand button
  // show collapse button
  const faq = document.querySelectorAll('.faq-wrapper')[index];
  console.log(index);
  console.log(faq);
  faq.querySelector('.faq-answer-wrapper').classList.remove('expanded');
  faq.querySelector('.expand-button').classList.remove('hidden');
  faq.querySelector('.collapse-button').classList.add('hidden');
}

{/* <div class="faq-wrapper">
<div class="faq-question-wrapper">
  <p class="faq-question">
    <b>What is the difference between an “English Golden” and an “American Golden”?</b>
  </p>
  <button class="expand-button" onclick="expandFaq(0)">
    <span class="material-symbols-outlined">expand_more</span>
  </button>
  <button class="collapse-button hidden" onclick="collapseFaq(0)">
    <span class="material-symbols-outlined">expand_less</span>
  </button>
</div>
<div class="faq-answer-wrapper">
  <p class="faq-answer">
    All Golden Retrievers were bred from European dogs, because the breed originated in Scotland. As the breed developed in the different countries, variations appeared. The European standard now calls for a stockier, blockier dog, and allows for a lighter coat, called a “cream”, hence the broadly used term “English Cream”. The American bred dogs tend to be leggier, more lightly built, (although there is a lot of variety in type!) and energetic, especially the field bred dogs. The American Standard allows for a “red” dog, which the European standard does not.
  </p>
  <p class="faq-answer">
    The AKC allows cream coated Goldens to be registered as “light Goldens”.
  </p>
</div>
</div> */}