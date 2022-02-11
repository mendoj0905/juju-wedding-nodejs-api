import WebPass from './webPassModel.js';

export default class WebPassDAL {

  static async get(wedding) {
    try {
      return await WebPass.findOne({ wedding });
    } catch (e) {
      console.error(e);
    }
  }

  static async add(webPass) {
    try { 
      return await WebPass.create(webPass)
    } catch(e) {
      console.error(e);
    }
  } 
}