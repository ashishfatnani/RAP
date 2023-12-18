const express = require("express");
const port = 5000;
const locationData = require("./locationData.js");
const app = express();

//Body Parser
app.use(express.json());

// Endpoint to find the location based on the landmark and municipality and region
app.get("/findLocation", (req, res) => {
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
      console.log("✌️neighbourhoods --->", neighbourhoods);

      for (const neighbourhood in neighbourhoods) {
        if (neighbourhoods[neighbourhood].Landmarks.includes(landmark)) {
          return res.json({ locationName: neighbourhoods[neighbourhood].Name });
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
