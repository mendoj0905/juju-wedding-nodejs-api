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

  static async searchRsvp(req, res) {
    if (req.body.name) {
      const rsvp = await guestService.searchRsvp(req.body.name);
      if (rsvp) {
        res.json(rsvp);
      } else {
        res.json({ success: false });
      }
    } 
  }

  static async updateRsvp(req, res) {
    if (req.body.name) {
      const updateRsvp = await guestService.update(req.body.name, req.body);
      res.json(updateRsvp);
    } else {
      res.json({ error: "Uh oh! Something went wrong!"})
    }
  }

  static async updateName(req, res) {
    if (req.body.name) {
      const updateName = await guestService.updateName(req.body.name);
      res.json(updateName);
    } else {
      res.json({ error: "Uh oh! Something went wrong!" });
    }
  }

  static async remove(req, res) {
    const deleted_guest = await guestService.remove(req.body.email);
    res.json(deleted_guest);
  }
}