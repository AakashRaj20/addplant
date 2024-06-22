"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  const [plantName, setPlantName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", plantName);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/v1/add-Plant",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      setPlantName("");
      setDescription("");
      setLocation("");
      setFile(null);
      setFileName("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <main className="py-8 px-6 md:px-40 lg:px-60 xl:px-80">
        <div className="flex justify-between items-center mb-[25px]">
          <h1 className="font-bold text-2xl">Add a Plant</h1>
          <Image
            src="/assets/user_profile.png"
            alt="user_profile_picture"
            width={44}
            height={44}
          />
        </div>
        <form className="space-y-[25px]" onSubmit={handleSubmit}>
          <div
            className="w-full bg-gray-100 rounded-md flex flex-col justify-center items-center gap-[14px] py-5 cursor-pointer"
            onClick={handleImageClick}
          >
            <p className="text-md text-[#00000066] tracking-wider">
              Upload Plant Photos
            </p>
            <Image
              src="/assets/upload_icon.png"
              alt="upload icon"
              width={25}
              height={25}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
              required
            />
            {fileName && <p className="text-gray-500">{fileName}</p>}
          </div>
          <input
            className="bg-gray-100 w-full rounded-md p-4 focus:border-black"
            type="text"
            placeholder="Plant Name"
            name="plant"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            required
          />
          <textarea
            className="bg-gray-100 w-full rounded-md p-4"
            placeholder="Description / Notes"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            className="bg-gray-100 w-full rounded-md p-4 focus:border-black"
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button
            disabled={loading}
            type="submit"
            className={!loading ? "submit-btn" : "submit-btn-disabled"}
          >
            Submit
          </button>
        </form>
      </main>
      <Navbar />
    </>
  );
}
