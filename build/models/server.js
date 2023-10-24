"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const company_routes_1 = __importDefault(require("../routes/company.routes"));
class Server {
    constructor() {
        this.apiPaths = {
            companies: '/api/company'
        };
        this.app = (0, express_1.default)();
        this.port = '3000';
        this.routes();
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
