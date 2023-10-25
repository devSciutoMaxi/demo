import Company from "../models/company";


class CompanyService {

    findAll() {
        return Company.findAll()
    }

    findOneByName(name: String) {
        return Company.findOne({ where: { name: name } });
    }

    build(body:any){
        return Company.build(body)
    }


}

export default new CompanyService;