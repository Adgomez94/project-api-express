import { UserController } from '../controllers/user.controler';
import { BaseRouter } from './router';

class UserRouter extends BaseRouter<UserController> {

  constructor() {
    super(UserController)
  }

  routes(): void {
    this.router.get('/user', (req, res) => this.controller.getUsers(req, res))
  }
}

export default UserRouter