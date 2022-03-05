import Guest from './guestModel.js';

export default class GuestDAL {

  static async getAll() {
    try {
      return await Guest.find({});
    } catch(e) {
      console.error(e);
    }
  }

  static async getByEmail(email) {
    try {
      return await Guest.findOne({ email });
    } catch (e) {
      console.error(e);
    }
  }

  static async getByName(name) {
    try {
      return await Guest.findOne({ name })
    } catch (e) {
      console.error(e);
    }
  }

  static async add(guest) {
    try {
      const { name } = guest;
      const guestExist = await this.getByName(name);
      if(guestExist) {
        const errMessage = `Name already exist - ${name}`;
        throw new Error(errMessage);
      }      
      return await Guest.create(guest);
    } catch(e) {
      console.error(e);
    }
  }

  static async remove(name) {
    try {
      return Guest.findOneAndDelete({ name });
    } catch(e) {
      console.error(e);
    }
  }

  static async update(name, guest) {
    try { 
      await Guest.findOneAndUpdate({ name }, guest);
      return await Guest.findOne({ name });
    } catch (e) {
      console.error(e);
    }
  }

  // static async deleteAll() {
  //   try {
  //     await Guest.dele
  //   }
  // }
}