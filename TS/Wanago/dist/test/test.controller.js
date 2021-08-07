import * as express from 'express';
class TestsController {
    constructor() {
        this.path = '/test';
        this.router = express.Router();
        this.getTest = (request, response) => {
            response.send("this is for  test, you twat  ");
        };
        this.testInput = (request, response) => {
            response.send("this is for  test, you twat  ");
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getTest);
        this.router.get(this.path, this.testInput);
    }
}
export default TestsController;
//# sourceMappingURL=test.controller.js.map