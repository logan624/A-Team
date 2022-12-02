import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

export const top_items = db.define("top_item_recommendations", {
    name:                         {type: DataTypes.STRING,
                                            primaryKey: true},
    category:                     {type: DataTypes.STRING},
    NumBought:                    {type: DataTypes.INTEGER}
}, {freezeTableName: true});

export default top_items;
