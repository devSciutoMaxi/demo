import { Request, Response } from "express";

export const getAll = (_req: Request, res: Response) => {
    res.json({
        msj: 'listamos todas las companias'
    })
}

export const getCompany = (req: Request, res: Response) => {

    const { name } = req.params

    res.json({
        msj: 'Listar una compañía con sus empleados',
        name
    })
}

export const postCompany = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msj: 'Poder agregar una nueva compañía',
        body
    })
}