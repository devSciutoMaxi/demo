import { DataTypes } from "sequelize";
import db from "../../config/connection";


const Company = db.define('Company', {
    name: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    cantEmployees: {
        type: DataTypes.INTEGER

    }
});

export default Company;