import * as express from 'express';
import User from './user.interface';
 
class UsersController {
  public path = '/users';
  public router = express.Router();
 
  private users: User[] = [
    {
      name: "skyler",
      nickname: "kevin",
      password : "ayo"
    }
  ];
 
  constructor() {
    this.initializeRoutes();
  }
 
  public initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createAnUser);
  }
 
  getAllUsers = (request: express.Request, response: express.Response) => {
    response.send(this.users);
  }
 
  createAnUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;
    this.users.push(user);
    response.send(user);
  }
}
 
export default UsersController;