"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const company_routes_1 = __importDefault(require("../routes/company.routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            companies: '/api/company'
        };
        this.app = (0, express_1.default)();
        this.port = '3000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.companies, company_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            return console.log('Servidor corriendo en puerto!   !! ' + this.port);
        });
    }
}
exports.default = Server;
