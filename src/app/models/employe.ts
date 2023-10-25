import { DataTypes } from "sequelize";
import db from "../../config/connection";


const Employe = db.define('Employe', {
    companyId: {
        type: DataTypes.INTEGER
    },
    documentNumber: {
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    dateAdmission: {
        type: DataTypes.STRING
    }
});

export default Employe;