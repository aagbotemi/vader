import Crypto from 'crypto-js';

const secretKey = 'nonkqGHbApSNMuvIC8EQHxcZrCk2gf0r';

class Crypt {
  encrypt(payload: never) {
    const cipher = Crypto.AES.encrypt(JSON.stringify(payload), secretKey);
    return cipher.toString();
  }

  decrypt(payload: never) {
    if (payload) {
      const decipher = Crypto.AES.decrypt(payload, secretKey);
      const plaintext = decipher.toString(Crypto.enc.Utf8);
      return JSON.parse(plaintext);
    } else {
      return null;
    }
  }
}

export default Crypt;
