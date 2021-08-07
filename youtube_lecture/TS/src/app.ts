import * as express from "express"

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
}

const app = new App().application;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send(" was sup  ");
})

app.listen(8080, (): void => console.log(" Server is on"))