import GuestService from '../services/GuestService.js';

const guestService = new GuestService();

export class GuestController {

  async getAll(req, res) {
    console.log(`Getting all guests`);
    const guests = await guestService.getAll();
    res.json(guests);
  }

  async add(req, res) {
    const email_exist = await guestService.getByEmail(req.body.email);
    
    if (!email_exist) {
      const { firstName, lastName, email } = req.body;
      console.log(`Added guest - ${firstName} ${lastName}, email - ${email}`);
      const addedGuest = await guestService.add(req.body);
      res.json(addedGuest);
    } else {
      console.log(`Email existed ${email_exist.email}`)
      res.json({ message: `E-mail has already been added - ${email_exist.email}`});
    }
  }

  async remove(req, res) {
    const deleted_guest = await guestService.remove(req.body.email);
    const { firstName, lastName, email } = deleted_guest;
    console.log(`Removed guest - ${firstName} ${lastName}, email - ${email}`);
    res.json(deleted_guest);
    
  }
}