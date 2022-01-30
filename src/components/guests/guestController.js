import GuestService from './guestService.js';

const guestService = new GuestService();

export class GuestController {

  async getAll(req, res) {
    const guests = await guestService.getAll();
    res.json(guests);
  }

  async add(req, res) {
    const addedGuest = await guestService.add(req.body)
    if (addedGuest) {
      res.json(addedGuest);
    } else {
      res.json({ error: "Uh oh! Something went wrong!"})
    }

  }

  async remove(req, res) {
    const deleted_guest = await guestService.remove(req.body.email);
    res.json(deleted_guest);
  }
}