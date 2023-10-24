"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("../controllers/company.controller");
const router = (0, express_1.Router)();
router.get('/', company_controller_1.getAll);
router.get('/:name', company_controller_1.getCompany);
router.post('/', company_controller_1.postCompany);
exports.default = router;
