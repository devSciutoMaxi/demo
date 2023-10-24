import express, { Application } from "express";
import router from '../routes/company.routes';


class Server {
    private app: Application
    private port: string;
    private apiPaths = {
        companies: '/api/company'
    }

    constructor() {
        this.app = express();
        this.port = '3000';
        this.routes();
    }

    routes(){
        this.app.use( this.apiPaths.companies, router )
    }

    listen() {
        this.app.listen(this.port, () => {
            return console.log('Servidor corriendo en puerto!   !! ' + this.port);
        });
    }

}

export default Server;