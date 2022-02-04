import { config } from 'dotenv';

import PasswordUtil from '../../util/PasswordUtil.js';
config();

export default class WebPassController {

  static verifyPassword(req, res) {
    const request_password = PasswordUtil.decodePassword(req.body.password)

    if (request_password == process.env.SITE_PASSWORD) {
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

}
