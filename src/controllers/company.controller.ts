import { Request, Response } from "express";
import Company from "../models/company";
import Employe from "../models/employe";

export const getAll = async (_req: Request, res: Response) => {

    const companies = await Company.findAll();

    res.json({ companies })
}

export const getCompanyEmployees =async  (req: Request, res: Response) => {

    const { id } = req.params

    const employees = await Employe.findAll({where: { companyId: id}})

    res.json({ employees })
}

export const postCompany = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msj: 'Poder agregar una nueva compañía',
        body
    })
}