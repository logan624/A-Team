import db from "../config/database.js";
import {Sequelize} from "sequelize";

const {DataTypes} = Sequelize;

export const similar_user_recs = db.define("similar_shopper_recommendations", {
    username:                    {type: DataTypes.STRING,
                                        primaryKey: true},
    name:                        {type: DataTypes.STRING},
    numSold:                   {type: DataTypes.INTEGER}
}, {freezeTableName: true});

export default similar_user_recs;
