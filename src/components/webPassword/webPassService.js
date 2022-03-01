import WebPassDAL from './webPassDAL.js';
import PasswordUtil from '../../util/PasswordUtil.js';

export default class WebPassService {

  static async checkPassword(wedding, password) {
    try {
      const { hash } = await WebPassDAL.get(wedding);
    
      const success = await PasswordUtil.compare(password, hash);

      console.log(`Checking password - ${success}`);
      return success; 

    } catch (e) {
      console.error(e);
    }
  }

  static async createPassword(wedPass) {
    try {
      const { wedding, password } = wedPass;
      const existingWedding = await WebPassDAL.get(wedding);

      if (existingWedding) {
        const errMessage = `Wedding already existing - ${existingWedding}`;
        throw new Error(errMessage);
      }

      const hash = await PasswordUtil.hashPassword(password);
      console.log(`Creating wedding password.`)
      return await WebPassDAL.add({ wedding, hash });
    } catch (e) {
      console.error(e);
    }
  }
}