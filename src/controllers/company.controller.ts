import { Request, Response } from "express";
import Company from "../models/company";
import Employe from "../models/employe";

export const getAll = async (_req: Request, res: Response) => {

    const companies = await Company.findAll();

    res.json({ companies })
}

export const getCompanyEmployees = async (req: Request, res: Response) => {
    const { id } = req.params

    const employees = await Employe.findAll({ where: { companyId: id } })

    if (employees.length) {
        res.json({ employees })
    } else {
        res.status(404).json({
            msg: 'No existe la compañia con el id ' + id
        })
    }
}

export const postCompany = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const existeCompany = await Company.findOne({ where: { name: body.name } });

        if (existeCompany) {
            res.status(400).json({
                msg: 'Ya existe esa compañia ' + body.name
            });
        } else {

            const company = Company.build(body)
            await company.save()
            res.json(company)
        }

    } catch (error) {

        console.error(error);
        res.status(500).json({
            msg: 'Error al grabar una nueva compañia'
        })
    }

}