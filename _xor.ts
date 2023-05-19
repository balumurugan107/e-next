var CryptoJS = require("crypto-js");

export function encrypt(content: string) {
  if (content) {
    let ciphertext = CryptoJS.AES.encrypt(content, '123').toString();
    return ciphertext
  }
  return content
}

export function encryptObject(content: any) {
  if (content) {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(content), '123').toString();
    return ciphertext
  }
  return content
}

export function decrypt(content: string) {
  if (content) {
    let bytes = CryptoJS.AES.decrypt(content, '123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
  return content;
}

export function decryptObject(content: any) {
  if (content) {
    let bytes = CryptoJS.AES.decrypt(content, '123');
    let originalObject = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return originalObject;
  }
  return content;
}