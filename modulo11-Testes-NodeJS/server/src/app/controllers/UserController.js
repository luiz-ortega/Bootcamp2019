import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);

    // return res.json({id: 1})
  }
}

export default new UserController();
