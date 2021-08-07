import * as express from 'express';
class UsersController {
    constructor() {
        this.path = '/users';
        this.router = express.Router();
        this.users = [
            {
                name: "skyler",
                nickname: "kevin",
                password: "ayo"
            }
        ];
        this.getAllUsers = (request, response) => {
            response.send(this.users);
        };
        this.createAnUser = (request, response) => {
            const user = request.body;
            this.users.push(user);
            response.send(user);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.createAnUser);
    }
}
export default UsersController;
//# sourceMappingURL=user.controller.js.map