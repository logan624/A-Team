import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const transaction = db.define("transaction", {
      transactionID:          {type:DataTypes.INTEGER,
                                    primaryKey: true},
      processingIsComplete:   {type:DataTypes.BOOLEAN},
      transactDate:           {type: DataTypes.DATE},
      bidID:                  {type: DataTypes.INTEGER}
}, {freezeTableName: true});

export default transaction;
