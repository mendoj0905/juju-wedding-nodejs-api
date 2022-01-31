import bcrypt from 'bcryptjs';

export default class PasswordUtil {

  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  
  static async compare(password, hash) {
    return bcrypt.compare(password, hash)
  }
  
  static decodePassword(password) {
    const bufferObj = Buffer.from(password, "base64");
    return bufferObj.toString("utf-8");
  }

  static encodePassword(password) {
    const encodedPassword = Buffer.from(password, "utf-8")
    return encodedPassword.toString("base64");
  }
}