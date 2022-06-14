import guestDAL from './guestDAL.js';

export default class GuestService {

  static async getAll() {
    try {
      console.log(`Getting all guests`);
      return await guestDAL.getAll();
    } catch (e) {
      console.error(e);
    } 
  }

  static async update(name, guest) {
    try {
      const guestExist = await guestDAL.getByName(name);
      if (guestExist) {
        const { name, ...updateFields } = guest;
        console.log(`Updating ${name} - fields ${JSON.stringify(updateFields)}`);
        return await guestDAL.update(name, updateFields);
      }
    } catch(e) {
      console.error(e);
    }
  }

  static async updateName(name) {
    try {
      const guestExist = await guestDAL.getByName(name);
      if (guestExist) {
        console.log(`Updating guest name ${name}`);
        return await guestDAL.update(name, name);
      }
    } catch(e) {
      console.error(e);
    }
  }

  static async searchRsvp(name) {
    try {
      console.log(`Searching - ${name}`);
      return await guestDAL.getByName(name);
    } catch (e) {
      console.error(e);
    }
  }

  static async add(guestToAdd) {

    try {

      let { name, familyMembers, ...otherFields } = guestToAdd;
      let family = [];

      if (familyMembers && familyMembers.length > 0) {
        otherFields.name = name;
        const addedGuest = await guestDAL.add(otherFields);
        const { _id } = addedGuest;

        family.push({ _id, name });

        for (const member of familyMembers) {
          const memberExist = await guestDAL.getByName(member.name);
          if (memberExist) {
            const { _id, name } = memberExist;
            family.push({ _id, name });
          } else {
            const { _id, name } = await guestDAL.add(member);
            family.push({ _id, name });
          }
        }
        for (const fam of family) {
          await guestDAL.update(fam.name, { familyMembers: family } );
        }

        console.log(`Guest added ${name}`);
        const newGuest = await guestDAL.getByName(name);
        return newGuest;

      } else {

        const addedGuest = await guestDAL.add(guestToAdd);
        const { _id, name } = addedGuest;
        family.push({ _id, name });
        const update = await guestDAL.update(name, { familyMembers: family })
        return update;

      }

    } catch (e) {
      console.error(e);
    }
  }

  static async remove(name) {
    const deleted_guest = await guestDAL.remove(name);
    console.log(`Removed guest - ${name}`);
    return deleted_guest;
    
  }

  static async partialSearch(name) {
    const guests = await guestDAL.partialNameSearch(name)
    console.log(`Found multiple guest`)
    return guests
  }

}