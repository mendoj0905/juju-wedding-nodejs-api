import WebPassService from './webPassService.js';

export default class WebPassController {

  static async verifyPassword(req, res) {
    const { wedding, password } = req.body;
    const success = await WebPassService.checkPassword(wedding, password); 
    console.log(success);   

    if (success) {
      /**
       * Send generate random token
       * Check email exist
       * JWT implementation?
       */
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
    
  }

  static async createPassword(req, res) {
    const { wedding } = await WebPassService.createPassword(req.body);
    if (wedding) {
      res.json({ wedding });
    } else {
      res.json({ message: `Wedding exist.`})
    }
  }

}
