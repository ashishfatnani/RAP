const locationData = {
  GTA: {
    Municipalities: {
      Toronto: {
        Municipality: "Toronto",
        Areas: [
          {
            Name: "Downtown",
            Neighbourhoods: [
              {
                Name: "Financial District",
                Landmarks: ["CN Tower", "Scotiabank Arena", "Union Station"],
              },
              {
                Name: "Entertainment District",
                Landmarks: [
                  "Rogers Centre",
                  "Royal Alexandra Theatre",
                  "TIFF Bell Lightbox",
                ],
              },
              {
                Name: "Harbourfront",
                Landmarks: [
                  "Harbourfront Centre",
                  "Toronto Islands",
                  "Ripley's Aquarium",
                ],
              },
            ],
          },
          {
            Name: "Midtown",
            Neighbourhoods: [
              {
                Name: "Yonge and Eglinton",
                Landmarks: [
                  "Yonge-Eglinton Centre",
                  "Eglinton Park",
                  "Crosstown LRT",
                ],
              },
              {
                Name: "Davisville",
                Landmarks: [
                  "Mount Pleasant Cemetery",
                  "June Rowlands Park",
                  "Shops at Davisville",
                ],
              },
              {
                Name: "Forest Hill",
                Landmarks: [
                  "Spadina Museum",
                  "Forest Hill Village",
                  "Upper Canada College",
                ],
              },
            ],
          },
          {
            Name: "East End",
            Neighbourhoods: [
              {
                Name: "Leslieville",
                Landmarks: [
                  "The Opera House",
                  "Leslieville Cheese Market",
                  "Jimmy Simpson Park",
                ],
              },
              {
                Name: "The Beaches",
                Landmarks: ["Woodbine Beach", "Boardwalk", "Kew Gardens"],
              },
              {
                Name: "Riverdale",
                Landmarks: ["Riverdale Farm", "Withrow Park", "Greektown"],
              },
            ],
          },
          {
            Name: "West End",
            Neighbourhoods: [
              {
                Name: "High Park",
                Landmarks: [
                  "High Park Zoo",
                  "Jamie Bell Adventure Playground",
                  "Grenadier Pond",
                ],
              },
              {
                Name: "Bloor West Village",
                Landmarks: [
                  "Bloor West Village BIA",
                  "Runnymede Theatre",
                  "Humber Cinema",
                ],
              },
              {
                Name: "The Junction",
                Landmarks: [
                  "The Junction Train Platform",
                  "Henderson Brewing",
                  "Stockyards Village",
                ],
              },
            ],
          },
          {
            Name: "North York",
            Neighbourhoods: [
              {
                Name: "Willowdale",
                Landmarks: [
                  "Mel Lastman Square",
                  "North York Central Library",
                  "Empress Walk",
                ],
              },
              {
                Name: "Don Mills",
                Landmarks: [
                  "Shops at Don Mills",
                  "Donalda Club",
                  "Edwards Gardens",
                ],
              },
              {
                Name: "York Mills",
                Landmarks: [
                  "York Mills Shopping Centre",
                  "Toronto French School",
                  "Windfields Park",
                ],
              },
            ],
          },
        ],
      },
      Mississauga: {
        Municipality: "Mississauga",
        Areas: [
          {
            Name: "Mississauga",
            Neighbourhoods: [
              {
                Name: "City Centre",
                Landmarks: [
                  "Square One Shopping Centre",
                  "Mississauga Celebration Square",
                  "Living Arts Centre",
                ],
              },
              {
                Name: "Streetsville",
                Landmarks: [
                  "Streetsville Village Square",
                  "Credit River",
                  "Vic Johnston Community Centre",
                ],
              },
            ],
          },
        ],
      },
      Etobicoke: {
        Municipality: "Etobicoke",
        Areas: [
          {
            Name: "Etobicoke",
            Neighbourhoods: [
              {
                Name: "Islington-City Centre West",
                Landmarks: [
                  "Sherway Gardens",
                  "Centennial Park",
                  "Kipling GO Station",
                ],
              },
              {
                Name: "The Kingsway",
                Landmarks: [
                  "Humber River",
                  "Kingsway Theatre",
                  "Lambton Golf and Country Club",
                ],
              },
            ],
          },
        ],
      },
    },
  },
  NewYork: {
    Municipalities: {
      New_York_City: {
        Municipality: "New_York_City",
        Areas: [
          {
            Name: "Manhattan",
            Neighbourhoods: [
              {
                Name: "Upper East Side",
                Landmarks: ["The Met", "Central Park", "Museum Mile"],
              },
              {
                Name: "Chelsea",
                Landmarks: ["High Line", "Chelsea Market", "The Vessel"],
              },
              {
                Name: "Harlem",
                Landmarks: [
                  "Apollo Theater",
                  "Marcus Garvey Park",
                  "Studio Museum in Harlem",
                ],
              },
            ],
          },
          {
            Name: "Brooklyn",
            Neighbourhoods: [
              {
                Name: "Williamsburg",
                Landmarks: [
                  "Brooklyn Brewery",
                  "Williamsburg Bridge",
                  "East River State Park",
                ],
              },
              {
                Name: "DUMBO",
                Landmarks: [
                  "Brooklyn Bridge",
                  "Jane's Carousel",
                  "St. Ann's Warehouse",
                ],
              },
              {
                Name: "Park Slope",
                Landmarks: [
                  "Prospect Park",
                  "Brooklyn Museum",
                  "Barclays Center",
                ],
              },
            ],
          },
          {
            Name: "Queens",
            Neighbourhoods: [
              {
                Name: "Astoria",
                Landmarks: [
                  "Astoria Park",
                  "Museum of the Moving Image",
                  "Bohemian Hall & Beer Garden",
                ],
              },
              {
                Name: "Flushing",
                Landmarks: [
                  "Flushing Meadows-Corona Park",
                  "Queens Botanical Garden",
                  "Citi Field",
                ],
              },
              {
                Name: "Long Island City",
                Landmarks: [
                  "Gantry Plaza State Park",
                  "MoMA PS1",
                  "Queensboro Bridge",
                ],
              },
            ],
          },
          {
            Name: "The Bronx",
            Neighbourhoods: [
              {
                Name: "Riverdale",
                Landmarks: ["Wave Hill", "Van Cortlandt Park", "Bronx Zoo"],
              },
              {
                Name: "Fordham",
                Landmarks: [
                  "Fordham University",
                  "Bronx Park",
                  "New York Botanical Garden",
                ],
              },
              {
                Name: "Throgs Neck",
                Landmarks: [
                  "Throgs Neck Bridge",
                  "Fort Schuyler",
                  "SUNY Maritime College",
                ],
              },
            ],
          },
          {
            Name: "Staten Island",
            Neighbourhoods: [
              {
                Name: "St. George",
                Landmarks: [
                  "St. George Theatre",
                  "Staten Island Ferry Terminal",
                  "Richmond County Bank Ballpark",
                ],
              },
              {
                Name: "Tottenville",
                Landmarks: [
                  "Conference House Park",
                  "Tottenville Library",
                  "Historic Richmond Town",
                ],
              },
              {
                Name: "New Dorp",
                Landmarks: [
                  "New Dorp Beach",
                  "Miller Field",
                  "Historic Richmond Town",
                ],
              },
            ],
          },
        ],
      },
    },
  },
};

module.exports = locationData;
