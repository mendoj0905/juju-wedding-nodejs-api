import bcrypt from 'bcryptjs';

export default class PasswordUtil {

  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  
  static async compare(password, hash) {
    return bcrypt.compare(password, hash)
  }
}