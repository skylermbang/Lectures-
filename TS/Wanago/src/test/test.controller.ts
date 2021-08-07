import * as express from 'express';

 
class TestsController {
  public path = '/test';
  public router = express.Router();
 

  constructor() {
    this.initializeRoutes();
  }
 
  public initializeRoutes() {
    this.router.get(this.path, this.getTest);
    this.router.get(this.path, this.testInput);
    
  }
 
    getTest = (request: express.Request, response: express.Response) => {
    response.send("this is for  test, you twat  ");
  }
    testInput= (request: express.Request, response: express.Response) => {

    response.send("this is for  test, you twat  ");
  }
 
}
 
export default TestsController;