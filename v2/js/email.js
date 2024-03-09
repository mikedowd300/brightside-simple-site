(() => {
  decodedKey = (codedKey) => {
    const keyMap = {
      '0': 'Y', '1': 'X', '2': 'W', '3': 'V', '4': 'U', '5': 'T', 
      '6': 'S', '7': 'R', '8': 'Q', '9': 'P', 'A': 'O', 'B': 'N', 
      'C': 'M', 'D': 'L', 'E': 'K', 'F': 'J', 'G': 'H', 'H': 'I', 
      'I': 'G', 'J': 'F', 'K': 'E', 'L': 'D', 'M': 'Z', 'N': 'C', 
      'O': 'B', 'P': 'A', 'Q': '9', 'R': '8', 'S': '7', 'T': '6', 
      'U': '5', 'V': '4', 'W': '3', 'X': '2', 'Y': '1', 'Z': '0'
    };
    let key = '';
    const codedKeyRay = atob(codedKey).split('');
    codedKeyRay.forEach((ch, i) => {
      if(ch !== '.') {
        if(codedKeyRay[i + 1] === '.') {
          key += keyMap[ch].toLowerCase()
        } else if(keyMap[ch]) {
          key += keyMap[ch]
        } else {
          key += ch;
        }
      }
    });
    return key
  };
  const publicKey = decodedKey(btoa('8Y9.5K619FHH1.PK_15'));

  sendMessage = () => {
    const name = document.getElementById('contact-name').value;
    const phoneNumber = document.getElementById('contact-phone-number').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const params = { name, email, message, phoneNumber };
    const templateId = "template_tgpkoog";
    const serviceId = "service_k0un4x3";
    emailjs.send(serviceId, templateId, params)
      .then(() => {
        name.value = '';
        phoneNumber.value = '';
        email.value = '';
        message.value = '';
        showSuccess();
        setTimeout(() => {
          navigate('landingPage', 'landing-nav')
          document.querySelector('#message-success').classList.remove('show');
        }, 2500);
      })
      .catch((e) => console.log('ERROR', e));
  }

  emailjs.init({ publicKey }) 
})();