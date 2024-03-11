(() => {
  const pageConfigs = {
    landingPage: {
      status: 'active',
      title: 'Brightside Golden Retrievers',
      tagLine: 'Bred to the European Standard!',
      pageId: 'landing-page'
    },
    littersPage: {
      status: 'active',
      title: 'Puppies',
      tagLine: null,
      pageId: 'litter-page'
    },
    boysPage: {
      status: 'active',
      title: 'Our Boys',
      tagLine: null,
      pageId: 'boys-page'
    },
    girlsPage: {
      status: 'active',
      title: 'Our Girls',
      tagLine: null,
      pageId: 'girls-page'
    },
    aboutUsPage: {
      status: 'active',
      title: 'About Brightside',
      tagLine: 'AKC Goldens, Bred to the European Standard!',
      pageId: 'about-us-page'
    },
    contactUsPage: {
      status: 'active',
      title: 'Contact Us',
      tagLine: 'AKC Goldens, Bred to the European Standard!',
      pageId: 'contact-us-page'
    },
    faqPage: {
      status: 'active',
      title: 'Frequently Asked Questions',
      tagLine: 'AKC Goldens, Bred to the European Standard!',
      pageId: 'faq-page'
    }
  };
  const pages = ['landingPage', 'litterPage', 'boysPage', 'girlsPage', 'aboutUsPage', 'faqPage'];
  const headerTitleEl = document.getElementById('header-title');
  const tagLineEl = document.getElementById('tag-line-text');

  initPage = pageConfig => {
    headerTitleEl.innerText = pageConfig.title;
    tagLineEl.innerText = pageConfig.tagLine;
  };

  navigate = (page, linkId) => {
    initPage({ ... pageConfigs[page] });
    // update nav
    document.querySelector('.nav-link.selected')?.classList.remove('selected');
    document.querySelector('.footer-link.selected')?.classList.remove('selected');
    document.getElementById(linkId).classList.add('selected');
    // update page
    newPageId = '#' + linkId.replace('-nav', '-page');
    document.querySelectorAll('.page').forEach(page => page.classList.remove('show'));
    document.querySelector(newPageId).classList.add('show');
    // scroll to top / set focus
    window.scrollTo(0, 0);
    document.getElementById('landing-nav').focus();
  };

  showSuccess = () => {
    document.querySelector('#message-success').classList.add('show');
  }

  initPage({ ...pageConfigs.landingPage });
  slideShow('landing-page-img', 3000, 10);
  window.scrollTo(0, 0);
})();

