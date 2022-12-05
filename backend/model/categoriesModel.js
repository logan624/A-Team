import db from "../config/database.js";
import {Sequelize} from "sequelize";

const {DataTypes} = Sequelize;

export const categorical_recommendations = db.define("categorical_recommendations", {
    username:                  {type: DataTypes.STRING,
                                        primaryKey: true},
    category:                  {type: DataTypes.STRING},
    name:                      {type: DataTypes.STRING},
    numSold:                   {type: DataTypes.INTEGER},
    sellerID:                  {type: DataTypes.STRING},
    use:                       {type: DataTypes.STRING},
    buyNowPrice:               {type: DataTypes.FLOAT}
}, {freezeTableName: true});
