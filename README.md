# AddPlant Assignment

## Frontend
Deloyed link of VerceL
[addplant.vercel.app/](https://addplant.vercel.app)

### Features
- **Responsive Design:** The application is fully responsive, ensuring a seamless user experience across different devices and screen sizes.
- **Form Validation:** All forms in the application are verified before submission to ensure that all required fields are filled out correctly.
- **File Uploading:** Multer is used on the backend to handle file uploads, ensuring efficient and secure file handling.


## App 

### Features
- **Screens:** Two screns are build in the app first screen shows all the plants saved in card form and the second screen shows the deatails for the specfic plants when clicked on them.
- **Design:** Pixel perfect design as per the figma design given

## Backend

Build using nodejs, multer, Cluiudinary, express, postgressql and deployed on vercel.

Deployed backend link
[addplant-zluv.vercel.app/](https://addplant-zluv.vercel.app/)

## Features

### Multer
Multer is used as a middleware to upload file to cloudinary to generate image url

### Cloudinary
It is used to generate url for the uploaded images and optimise them, written as a util file

### PostgresSql
This the database is used to store the data and is deployed on vercel

## API Endpoints
Two end points are created 

### Post endpoint /api/v1/add-plant
This end point writes the form data from the user into the sql database

### Get endpoint /api/v1/plants
This end point retrieves all the data from the sql database and renders it in the react native app
