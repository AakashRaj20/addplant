import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./config/db.js";
import addPlantRouter from "./routes/addPlants.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", addPlantRouter);

db.sequelize.sync().then(() => {
  console.log("db has been re sync");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3001");
});
