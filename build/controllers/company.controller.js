"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCompany = exports.getCompany = exports.getAll = void 0;
const getAll = (_req, res) => {
    res.json({
        msj: 'listamos todas las companias'
    });
};
exports.getAll = getAll;
const getCompany = (req, res) => {
    const { name } = req.params;
    res.json({
        msj: 'Listar una compañía con sus empleados',
        name
    });
};
exports.getCompany = getCompany;
const postCompany = (req, res) => {
    const { body } = req;
    res.json({
        msj: 'Poder agregar una nueva compañía',
        body
    });
};
exports.postCompany = postCompany;
