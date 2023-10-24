import { Router } from "express";
import { getAll } from "../controllers/company.controller";

const router = Router();

router.get('/', getAll);

export default router;
