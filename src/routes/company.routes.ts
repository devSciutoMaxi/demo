import { Router } from "express";
import { getAll, getCompany, postCompany } from "../controllers/company.controller";

const router = Router();

router.get('/', getAll);
router.get('/:id', getCompany);
router.post('/', postCompany);


export default router;
