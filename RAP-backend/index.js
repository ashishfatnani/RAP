const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    locationName: "",
    description: "",
    nearBy: "",
  });
});

app.post("/findLocation", async (req, res) => {
  try {
    const { landmark, municipality, region } = req.body;
    const response = await axios.post("http://localhost:5000/findLocation", {
      landmark,
      municipality,
      region,
    });

    const { locationName, description, nearBy } = response.data;
    res.render("index", {
      locationName,
      description,
      nearBy,
      error: undefined,
    });
  } catch (error) {
    res.render("index", {
      error: "Location not found for the given parameters.",
    });
  }
});

app.listen(port, () => {
  console.log(`Frontend server running on PORT ${port}`);
});
