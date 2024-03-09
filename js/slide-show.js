const slideShowMap = {
  'buddy': ['buddy/buddy-1.jpg', 'buddy/buddy-2.jpg', 'buddy/buddy-3.jpg', 'buddy/buddy-4.jpg', 'buddy/buddy-4.jpg'],
  'max': ['max/max-1.jpg', 'max/max-2.jpg', 'max/max-3.jpg', 'max/max-4.jpg', 'max/max-5.jpg'],
  'rosie': ['rosie/rosie-1.jpg', 'rosie/rosie-2.jpg', 'rosie/rosie-3.jpg', 'rosie/rosie-4.jpg', 'rosie/rosie-5.jpg', 'rosie/rosie-6.jpg'],
  'bailey': ['bailey/bailey-1.jpg', 'bailey/bailey-2.jpg'],
  'landing-page-img': ['landing-page/landing-page-2.jpg', 'landing-page/landing-page-3.jpg', 'landing-page/landing-page-4.jpg', 'landing-page/landing-page-6.jpg']
}

let slideShowInterval;

const slideShow = (target, interval = 4000, iterations = 10) => {
  let count = 0;
  if(slideShowInterval) {
    clearInterval(slideShowInterval);
  }
  let opacity = 1;
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