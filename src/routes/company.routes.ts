import { Router } from "express";
import { getAll, getCompanyEmployees, postCompany } from "../controllers/company.controller";

const router = Router();

router.get('/', getAll);
router.get('/:id', getCompanyEmployees);
router.post('/', postCompany);


export default router;
