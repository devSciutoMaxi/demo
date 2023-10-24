import { Request, Response } from "express";

export const getAll = (_req: Request, res: Response) => {
    res.json({
        msj: 'getAll bien'
    })
}
