import { Sequelize } from "sequelize";


const db = new Sequelize('new_developers','root','123456',{
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});


export default db;