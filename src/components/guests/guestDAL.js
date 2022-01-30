import Guest from './guestModel.js';

export default class GuestDAL {

  async getAll() {
    try {
      return await Guest.find({});
    } catch(e) {
      console.error(e);
    }
  }

  async getByEmail(email) {
    try {
      return await Guest.findOne({ email });
    } catch (e) {
      console.error(e);
    }
  }

  async add(guest) {
    try {
      return await Guest.create(guest);
    } catch(e) {
      console.error(e);
    }
  }

  async remove(email) {
    try {
      return Guest.findOneAndDelete({ email });
    } catch(e) {
      console.error(e);
    }
  }

  async update(guest) {
    try { 
      return Guest.findOneAndUpdate({ email }, guest);
    } catch (e) {
      console.error(e);
    }
  }
}