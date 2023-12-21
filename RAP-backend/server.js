const express = require("express");
const cors = require("cors");
const port = 5000;
const locationData = require("./locationData.js");
const app = express();

//Body Parser
app.use(express.json());

app.use(cors());

// Endpoint to find the location based on the landmark and municipality and region
app.post("/findLocation", (req, res) => {
  try {
    const { landmark, municipality, region } = req.body;
    if (!landmark || !municipality || !region) {
      return res.status(400).json({
        error: "Region,Landmark and Municipality parameters are required.",
      });
    }

    const municipalityData =
      locationData[region]["Municipalities"][municipality];
    if (!municipalityData) {
      return res.status(404).json({ error: "Municipality not found." });
    }

    for (const area in municipalityData["Areas"]) {
      const neighbourhoods = municipalityData["Areas"][area]["Neighbourhoods"];

      for (const neighbourhood in neighbourhoods) {
        const isMatch = neighbourhoods[neighbourhood].Landmarks.find(
          (item) => item.Name === landmark
        );
        console.log("✌️isMatch --->", isMatch);
        if (isMatch) {
          return res.json({
            locationName: neighbourhoods[neighbourhood].Name,
            description: isMatch.Description,
            nearBy: neighbourhoods[neighbourhood].Nearby,
          });
        }
        console.log(
          "✌️neighbourhoods[neighbourhood].Name --->",
          neighbourhoods[neighbourhood].Name
        );
      }
    }
  } catch (error) {
    console.log("✌️error --->", error);
    return res.status(404).json({
      error: "Location not found for the given landmark and municipality.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server runnning on PORT ${port}`);
});
