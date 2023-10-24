import express, { Application } from "express";
import router from '../routes/company.routes';
import cors from 'cors';

class Server {
    private app: Application
    private port: string;
    private apiPaths = {
        companies: '/api/company'
    }

    constructor() {
        this.app = express();
        this.port = '3000';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())
    }


    routes() {
        this.app.use(this.apiPaths.companies, router)
    }

    listen() {
        this.app.listen(this.port, () => {
            return console.log('Servidor corriendo en puerto!   !! ' + this.port);
        });
    }

}

export default Server;