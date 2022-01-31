import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import User from './userDAL.js';
import PasswordUtil from '../../util/PasswordUtil.js';
config();

export default class AuthService {

  static async generateToken(username, password) {
    try {
      const { _id, hash } = await User.get(username);
      const success = await PasswordUtil.compare(password, hash);
      if (_id && success) {
        const token = jwt.sign(
          { user_id: _id, username}, 
          process.env.JWT_SECRET, 
          {
            expiresIn: "2h"
          });
  
        return token;
      }
    
    } catch (e) {
      console.error(e);
    }
  }

  static async createUser(user) {
    try {
      const { username, password } = user;
      const hash = await PasswordUtil.hashPassword(password);
      return await User.create({ username, hash });
    } catch(e) {
      console.log(e);
    } 
  }

}
