import { Router } from "express";
import { addPlantInfo, getPlants } from "../controller/addPlants.controller.js"; // Adjust the path accordingly
import { upload } from "../middleware/multer.middleware.js"; // Adjust the path accordingly

const addPlantRouter = Router();

addPlantRouter.post("/add-plant", upload.single("file"), addPlantInfo);
addPlantRouter.get("/plants", getPlants);

export default addPlantRouter;
