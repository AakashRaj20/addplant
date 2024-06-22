import db from "../config/db.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";

const Plant = db.plants;

// post request to add plant info
export const addPlantInfo = async (req, res, next) => {
  const { name, location, description } = req.body;
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const response = await uploadOnCloudinary(file.path);

    if (!response) {
      return res
        .status(500)
        .json({ error: "Failed to upload file to Cloudinary" });
    }

    const newPlant = await Plant.create({
      plant_name: name,
      location,
      description,
      image: response.secure_url,
    });

    return res
      .status(201)
      .json({ message: "Plant info added successfully", plant: newPlant });
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while adding plant info",
      details: error.message,
    });
  }
};

// get request to get all plants
export const getPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    return res.status(200).json(plants);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while fetching plants",
      details: error.message,
    });
  }
};
