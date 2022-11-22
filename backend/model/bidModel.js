import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const bid = db.define("bid", {
      bidID:                  {type:DataTypes.INTEGER,
                                    primaryKey: true},
      bidPrice:               {type:DataTypes.FLOAT},
      bidStartDate:           {type: DataTypes.DATE},
      bidEndDate:             {type: DataTypes.DATE},
      username:               {type: DataTypes.STRING},
      itemID:                 {type: DataTypes.INTEGER}
}, {freezeTableName: true});

export default bid;
