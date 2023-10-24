import { Request, Response } from "express";
import Company from "../models/company";

export const getAll = async (_req: Request, res: Response) => {

    const companies = await Company.findAll();

    res.json({ companies })
}

export const getCompany = (req: Request, res: Response) => {

    const { id } = req.params

    res.json({
        msj: 'Listar una compañía con sus empleados',
        id
    })
}

export const postCompany = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msj: 'Poder agregar una nueva compañía',
        body
    })
}