import App from './app';
import PostsController from './posts/post.controller';
import UsersController from './users/user.controller';
import TestsController from './test/test.controller';
import 'dotenv/config';
import * as mongoose from 'mongoose';
const { MONGO_PATH, } = process.env;
mongoose.connect(MONGO_PATH);
const app = new App([
    new PostsController(),
    new UsersController(),
    new TestsController(),
]);
//app.listen();
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// function loggerMiddleware(req: express.Request, res: express.Response, next) {
//   console.log(`${req.method} ${req.path}`);
//   next();
// }
// //http.IncomingMessage.prototype.isPrototypeOf(request); 
// const app = express();
// app.use(bodyParser.json());
// app.use(loggerMiddleware);
// app.get('/hello', (req, res) => {
//   res.send(req.body);
// });
// const router= express.Router();
// const router2 = express.Router();
// router.get('/router1', (req,res)=>{
//     res.send("hello skyler ");
// })
// router.get('/', (req,res)=>{
//     res.send({
//         hostname: req.hostname,
//         path: req.path,
//         method: req.method
//     });
// })
// app.use('/api', router) ;
// app.listen(5000);
//# sourceMappingURL=server.js.map