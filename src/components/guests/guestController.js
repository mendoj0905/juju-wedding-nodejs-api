import guestService from './guestService.js';

export default class GuestController {

  static async getAll(req, res) {
    const guests = await guestService.getAll();
    res.json(guests);
  }

  static async add(req, res) {
    const addedGuest = await guestService.add(req.body)
    if (addedGuest) {
      res.json(addedGuest);
    } else {
      res.json({ error: "Uh oh! Something went wrong!"})
    }

  }

  static async remove(req, res) {
    const deleted_guest = await guestService.remove(req.body.email);
    res.json(deleted_guest);
  }
}