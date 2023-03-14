import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const user = db.define("user", {
      username:               {type:DataTypes.INTEGER,
                                    primaryKey: true},
      firstName:              {type:DataTypes.STRING},
      lastName:               {type: DataTypes.INTEGER},
      accountType:            {type: DataTypes.STRING},
      birthDate:              {type: DataTypes.STRING},
      email:                  {type: DataTypes.STRING},
      city:                   {type: DataTypes.STRING},
      state:                  {type: DataTypes.STRING},
      phoneNum:               {type: DataTypes.STRING},
      streetAddress:          {type: DataTypes.STRING},
      accountStartDate:       {type: DataTypes.DATE},
      accountEndDate:         {type: DataTypes.DATE}
}, {freezeTableName: true});

/
export default user;
