import { Request, Response } from "express";
import CompanyService from "../services/company.service";
import EmployeService from "../services/employe.service";

export const getAll = async (_req: Request, res: Response) => {

    const companies = await CompanyService.findAll()

    res.json({ companies })
}

export const getCompanyEmployees = async (req: Request, res: Response) => {
    const { id } = req.params

    const employees = await EmployeService.findAllByCompanyId(id)

    if (employees.length) {
        res.json({ employees })
    } else {
        res.status(404).json({
            msg: 'No existen empleados para la compañia con el id ' + id
        })
    }
}

export const postCompany = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const existeCompany = await CompanyService.findOneByName(body.name);

        if (existeCompany) {
            res.status(400).json({
                msg: 'Ya existe esa compañia ' + body.name
            });
        } else {

            const company = CompanyService.build(body)
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