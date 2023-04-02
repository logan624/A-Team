import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const profile = db.define("profile", {
      profileID:               {type:DataTypes.INTEGER,
                                    primaryKey: true},
      description:              {type:DataTypes.STRING},
      username:               {type: DataTypes.STRING}
}, {freezeTableName: true});

export default profile;
