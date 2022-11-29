import bcrypt from 'bcrypt';
import crypto from 'crypto';

import SystemSettingsServices from '#modules/systemSettings/SystemSettingsServices';

const settings = SystemSettingsServices.getSettings();
const { pepper } = settings.encrypting || {};
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

const StringHelper = {
  async timeout(ms) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  encrypt(text, slt) {
    if (!text || !slt) return text;
    try {
      const secretKey = `${slt}${pepper}`;
      const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
      const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

      return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    } catch (e) {
      console.error('Can not encrypt: ', text);
      return text;
    }
  },

  decrypt(hashString, slt) {
    if (!hashString) return hashString;
    try {
      const [ivValue, text] = hashString.split(':');
      const secretKey = `${slt}${pepper}`;
      const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(ivValue, 'hex'));
      const decrypted = Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()]);

      return decrypted.toString();
    } catch (e) {
      console.error('Can not decrypt: ', hashString, e);
      return hashString;
    }
  },

  generateToken(length, lowCase = true, highCase = true, numbers = true) {
    let result = '';
    let characters = lowCase ? 'abcdefghijklmnopqrstuvwxyz' : '';
    characters = highCase ? `${characters}ABCDEFGHIJKLMNOPQRSTUVWXYZ` : characters;
    characters = numbers ? `${characters}0123456789` : characters;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  async generateBcrypt(stringToEncrypt) {
    return bcrypt.hash(stringToEncrypt, 13);
  },

  async compareBcrypt(plainText, hash) {
    return bcrypt.compare(plainText, hash);
  },

  createHash: elements => {
    const stringToHash = Array.isArray(elements) ? elements.join('') : `${elements}`;
    return crypto.createHash('sha1').update(stringToHash).digest('base64');
  },

  hasDuplicates: array => (new Set(array)).size !== array.length,

  removeDuplicates: array => [...new Set(array)],

  random: numbers => numbers[Math.floor(Math.random() * numbers.length)],
};

export default StringHelper;
