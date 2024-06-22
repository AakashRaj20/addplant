import { DataTypes, Sequelize } from "sequelize";
import createPlantModel from "../models/plantModel.js";
import * as dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_STRING,
  { dialectModule: pg }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("db connected to postgres");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.plants = createPlantModel(sequelize, DataTypes);

// Sync without dropping the existing tables
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synchronized with the database");
  })
  .catch((err) => {
    console.log("error " + err);
  });

export default db;
