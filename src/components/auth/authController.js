import AuthService from './authService.js';

export default class AuthController {
  
  static async token(req, res) {
    const { username, password } = req.body;
    const token = await AuthService.generateToken(username, password);
    res.json({ token: `Bearer ${token}`});

  }

  static async createUser(req, res) {
    const { username } = await AuthService.createUser(req.body);
    if (username) {
      res.json({username});
    } else {
      res.json({ message: `Username exists.`})
    }
    
  }
}