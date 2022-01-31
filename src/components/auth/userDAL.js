import User from './userModel.js';

export default class UserDAL {

  static async get(username) {
    try {
      return await User.findOne({ username });
    } catch(e) {
      console.error(e);
    }
  }

  static async create(user) {
    try {
      return await User.create(user);
    } catch (e) {
      console.error(e);
    }
  }
}