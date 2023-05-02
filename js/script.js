

const encrypt = (text) => {
  let encryptedText = text.replace(/e/g, 'enter');
  encryptedText = encryptedText.replace(/i/g, 'imes');
  encryptedText = encryptedText.replace(/a/g, 'ai');
  encryptedText = encryptedText.replace(/o/g, 'ober');
  encryptedText = encryptedText.replace(/u/g, 'ufat');
  return encryptedText;
};

const decrypt = (text) => {
  let decryptedText = text.replace(/enter/g, 'e');
  decryptedText = decryptedText.replace(/imes/g, 'i');
  decryptedText = decryptedText.replace(/ai/g, 'a');
  decryptedText = decryptedText.replace(/ober/g, 'o');
  decryptedText = decryptedText.replace(/ufat/g, 'u');
  return decryptedText;
};

const textoEl = document.querySelector('#texto');
const resultadoEl = document.querySelector('#resultado');

document.querySelector('#encriptarBtn').addEventListener('click', () => {
    if (textoEl.value.trim() !== '') {
        resultadoEl.value = encrypt(textoEl.value);
        document.querySelector('#resultadoDiv img').style.display = 'none';
        document.querySelector('#resultadoDiv p').style.display = 'none';
    }
});

document.querySelector('#desencriptarBtn').addEventListener('click', () => {
    resultadoEl.value = decrypt(textoEl.value);
});

if (resultadoEl.value.trim() !== '') {
    document.querySelector('#copiarBtn').style.display = 'block';
} else {
    document.querySelector('#copiarBtn').style.display = 'none';
}

document.querySelector('#copiarBtn').addEventListener('click', () => {
    resultadoEl.select();
    document.execCommand('copy');
});