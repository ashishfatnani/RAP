import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "antd";

import "./Location.css";
const { Search } = Input;

const Location = () => {
  const [landmark, setLandmark] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [region, setRegion] = useState("");
  const [locationName, setLocationName] = useState("");
  const [error, setError] = useState("");

  const handleFindLocation = async () => {
    try {
      const response = await axios.post("http://localhost:5000/findLocation", {
        landmark,
        municipality,
        region,
      });

      setLocationName(response.data.locationName);
      setError("");
    } catch (error) {
      setError("Location not found for the given landmark and municipality.");
      setLocationName("");
    }
  };
  return (
    <div className="container">
      <h1>Find Location</h1>
      <div className="formContainer">
        <Search
          placeholder="Enter Region"
          onChange={(e) => setRegion(e.target.value)}
          className="inputField"
        />
        <Search
          placeholder="Enter Municipality"
          onChange={(e) => setMunicipality(e.target.value)}
          className="inputField"
        />
        <Search
          placeholder="Enter Landmark"
          onChange={(e) => setLandmark(e.target.value)}
          className="inputField"
        />
      </div>
      <Button type="primary" onClick={handleFindLocation}>
        Find Location
      </Button>
      {locationName && (
        <p className="resultMessage">Location Name: {locationName}</p>
      )}
      {error && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default Location;
