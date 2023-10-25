import Employe from "../models/employe";


class EmployeService {

    findAllByCompanyId(id: String) {
        return Employe.findAll({ where: { companyId: id } })
    }

}

export default new EmployeService;