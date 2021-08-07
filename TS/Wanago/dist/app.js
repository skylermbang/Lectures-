import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import errorMiddleware from './middleware/error.middleware';
class App {
    constructor(controllers) {
        this.app = express();
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
        this.listen();
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
    initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    connectToTheDatabase() {
        const { MONGO_PATH, } = process.env;
        mongoose.connect(`${MONGO_PATH}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}
export default App;
//# sourceMappingURL=app.js.map