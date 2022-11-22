import {Sequelize} from "sequelize";
import db from "../config/database.js";
import user from "./userModel.js";

const {DataTypes} = Sequelize;

const item = db.define("item", {
      itemID:                 {type:DataTypes.INTEGER,
                                    primaryKey: true},
      name:                   {type:DataTypes.STRING},
      category:               {type: DataTypes.STRING},
      subcategory:            {type: DataTypes.STRING},
      use:                    {type: DataTypes.STRING},
      sellerID:               {type: DataTypes.STRING},
      buyNowPrice:            {type: DataTypes.FLOAT}
}, {freezeTableName: true});

export default item;
