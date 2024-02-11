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
  emailjs.init({ publicKey }) 
})();