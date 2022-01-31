import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export default class authMiddleware {

  static async verifyToken(req, res, next) {

    const token = req.headers['authorization'].substr("Bearer ".length);

    if(!token) {
      return res.status(403).send("A token is required for authentication.");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (e) {
      return res.status(401).send("Invalid Token");
    }

    return next();
  }
}