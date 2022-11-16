import {Sequelize} from "sequelize";

const db = new Sequelize("universities", "root", "", {
   host: "localhost",
   dialect: "mysql",
   define: {timestamps: false}
});

export default db;