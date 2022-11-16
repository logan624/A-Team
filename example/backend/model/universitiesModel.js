import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const university = db.define("universities", {
   id: {type:DataTypes.INTEGER,
         primaryKey: true
   },
   name: {type:DataTypes.STRING},
   enrollment_count: {type: DataTypes.INTEGER},
   city: {type: DataTypes.STRING},
   state: {type: DataTypes.STRING}
}, {freezeTableName: true});

export default university;

