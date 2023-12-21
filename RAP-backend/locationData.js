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
                Landmarks: [
                  {
                    Name: "CN Tower",
                    Description: "Iconic landmark and communication tower.",
                  },
                  {
                    Name: "Scotiabank Arena",
                    Description: "Major sports and entertainment venue.",
                  },
                  {
                    Name: "Union Station",
                    Description:
                      "Historic train station and transportation hub.",
                  },
                ],
                Nearby: ["Entertainment District", "Harbourfront"],
              },
              {
                Name: "Entertainment District",
                Landmarks: [
                  {
                    Name: "Rogers Centre",
                    Description:
                      "Multi-purpose stadium with a retractable roof.",
                  },
                  {
                    Name: "Royal Alexandra Theatre",
                    Description: "Historic theatre for musicals and plays.",
                  },
                  {
                    Name: "TIFF Bell Lightbox",
                    Description: "Cultural center for film and media.",
                  },
                ],
                Nearby: ["Financial District", "Harbourfront"],
              },
              {
                Name: "Harbourfront",
                Landmarks: [
                  {
                    Name: "Harbourfront Centre",
                    Description:
                      "Cultural and arts center along the waterfront.",
                  },
                  {
                    Name: "Toronto Islands",
                    Description:
                      "Chain of small islands offering parks and beaches.",
                  },
                  {
                    Name: "Ripley's Aquarium",
                    Description:
                      "Aquarium showcasing marine life and habitats.",
                  },
                ],
                Nearby: ["Financial District", "Entertainment District"],
              },
            ],
          },
          {
            Name: "Midtown",
            Neighbourhoods: [
              {
                Name: "Yonge and Eglinton",
                Landmarks: [
                  {
                    Name: "Yonge-Eglinton Centre",
                    Description: "Shopping and entertainment complex.",
                  },
                  {
                    Name: "Eglinton Park",
                    Description: "Community park with sports facilities.",
                  },
                  {
                    Name: "Crosstown LRT",
                    Description:
                      "Light rail transit line connecting east and west.",
                  },
                ],
                Nearby: ["Davisville", "Forest Hill"],
              },
              {
                Name: "Davisville",
                Landmarks: [
                  {
                    Name: "Mount Pleasant Cemetery",
                    Description: "Historic cemetery with green spaces.",
                  },
                  {
                    Name: "June Rowlands Park",
                    Description:
                      "Public park with playgrounds and sports areas.",
                  },
                  {
                    Name: "Shops at Davisville",
                    Description: "Retail district with shops and dining.",
                  },
                ],
                Nearby: ["Yonge and Eglinton", "Forest Hill"],
              },
              {
                Name: "Forest Hill",
                Landmarks: [
                  {
                    Name: "Spadina Museum",
                    Description: "Mansion and historic site with gardens.",
                  },
                  {
                    Name: "Forest Hill Village",
                    Description: "Quaint village with shops and cafes.",
                  },
                  {
                    Name: "Upper Canada College",
                    Description:
                      "Private boys' school with a prestigious history.",
                  },
                ],
                Nearby: ["Yonge and Eglinton", "Davisville"],
              },
            ],
          },
          {
            Name: "East End",
            Neighbourhoods: [
              {
                Name: "Leslieville",
                Landmarks: [
                  {
                    Name: "The Opera House",
                    Description: "Live music venue in a historic building.",
                  },
                  {
                    Name: "Leslieville Cheese Market",
                    Description:
                      "Specialty shop offering a variety of cheeses.",
                  },
                  {
                    Name: "Jimmy Simpson Park",
                    Description: "Community park with sports facilities.",
                  },
                ],
                Nearby: ["The Beaches", "Riverdale"],
              },
              {
                Name: "The Beaches",
                Landmarks: [
                  {
                    Name: "Woodbine Beach",
                    Description:
                      "Popular beach with a boardwalk and volleyball courts.",
                  },
                  {
                    Name: "Boardwalk",
                    Description:
                      "Scenic boardwalk along the Lake Ontario shore.",
                  },
                  {
                    Name: "Kew Gardens",
                    Description:
                      "Park with gardens, a playground, and a wading pool.",
                  },
                ],
                Nearby: ["Leslieville", "Riverdale"],
              },
              {
                Name: "Riverdale",
                Landmarks: [
                  {
                    Name: "Riverdale Farm",
                    Description: "Working farm in a city park setting.",
                  },
                  {
                    Name: "Withrow Park",
                    Description:
                      "Community park with a playground and sports fields.",
                  },
                  {
                    Name: "Greektown",
                    Description:
                      "Vibrant neighborhood with Greek-inspired shops and dining.",
                  },
                ],
                Nearby: ["Leslieville", "The Beaches"],
              },
            ],
          },
          {
            Name: "West End",
            Neighbourhoods: [
              {
                Name: "High Park",
                Landmarks: [
                  {
                    Name: "High Park Zoo",
                    Description: "Small zoo with a variety of animals.",
                  },
                  {
                    Name: "Jamie Bell Adventure Playground",
                    Description: "Children's playground with unique features.",
                  },
                  {
                    Name: "Grenadier Pond",
                    Description: "Scenic pond within High Park.",
                  },
                ],
                Nearby: ["Bloor West Village", "The Junction"],
              },
              {
                Name: "Bloor West Village",
                Landmarks: [
                  {
                    Name: "Bloor West Village BIA",
                    Description: "Shopping district with local businesses.",
                  },
                  {
                    Name: "Runnymede Theatre",
                    Description:
                      "Historic movie theater in Bloor West Village.",
                  },
                  {
                    Name: "Humber Cinema",
                    Description:
                      "Independent cinema showcasing a variety of films.",
                  },
                ],
                Nearby: ["High Park", "The Junction"],
              },
              {
                Name: "The Junction",
                Landmarks: [
                  {
                    Name: "The Junction Train Platform",
                    Description: "Historic train station platform.",
                  },
                  {
                    Name: "Henderson Brewing",
                    Description: "Craft brewery in the Junction neighborhood.",
                  },
                  {
                    Name: "Stockyards Village",
                    Description:
                      "Shopping and dining district in the Stockyards area.",
                  },
                ],
                Nearby: ["High Park", "Bloor West Village"],
              },
            ],
          },
          {
            Name: "North York",
            Neighbourhoods: [
              {
                Name: "Willowdale",
                Landmarks: [
                  {
                    Name: "Mel Lastman Square",
                    Description:
                      "Public square with events and outdoor activities.",
                  },
                  {
                    Name: "North York Central Library",
                    Description: "Large public library in North York.",
                  },
                  {
                    Name: "Empress Walk",
                    Description: "Shopping complex with stores and dining.",
                  },
                ],
                Nearby: ["Don Mills", "York Mills"],
              },
              {
                Name: "Don Mills",
                Landmarks: [
                  {
                    Name: "Shops at Don Mills",
                    Description: "Outdoor shopping and entertainment district.",
                  },
                  {
                    Name: "Donalda Club",
                    Description: "Private golf and country club in Don Mills.",
                  },
                  {
                    Name: "Edwards Gardens",
                    Description:
                      "Botanical garden and park with walking trails.",
                  },
                ],
                Nearby: ["Willowdale", "York Mills"],
              },
              {
                Name: "York Mills",
                Landmarks: [
                  {
                    Name: "York Mills Shopping Centre",
                    Description: "Shopping mall in the York Mills area.",
                  },
                  {
                    Name: "Toronto French School",
                    Description: "Private French-language school.",
                  },
                  {
                    Name: "Windfields Park",
                    Description:
                      "Community park in the York Mills neighborhood.",
                  },
                ],
                Nearby: ["Willowdale", "Don Mills"],
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
                  {
                    Name: "Square One Shopping Centre",
                    Description:
                      "Large shopping mall with a variety of stores.",
                  },
                  {
                    Name: "Mississauga Celebration Square",
                    Description: "Public square hosting events and festivals.",
                  },
                  {
                    Name: "Living Arts Centre",
                    Description:
                      "Venue for performing arts and cultural events.",
                  },
                ],
                Nearby: ["Streetsville"],
              },
              {
                Name: "Streetsville",
                Landmarks: [
                  {
                    Name: "Streetsville Village Square",
                    Description: "Historic square with shops and restaurants.",
                  },
                  {
                    Name: "Credit River",
                    Description:
                      "River with scenic trails and parks along its banks.",
                  },
                  {
                    Name: "Vic Johnston Community Centre",
                    Description:
                      "Community center with recreational facilities.",
                  },
                ],
                Nearby: ["City Centre"],
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
                  {
                    Name: "Sherway Gardens",
                    Description: "Shopping mall with high-end retailers.",
                  },
                  {
                    Name: "Centennial Park",
                    Description:
                      "Large park with sports facilities and conservatory.",
                  },
                  {
                    Name: "Kipling GO Station",
                    Description:
                      "Major transit station for GO Transit services.",
                  },
                ],
                Nearby: ["The Kingsway"],
              },
              {
                Name: "The Kingsway",
                Landmarks: [
                  {
                    Name: "Humber River",
                    Description:
                      "Scenic river with parks and trails along its banks.",
                  },
                  {
                    Name: "Kingsway Theatre",
                    Description:
                      "Historic movie theater in The Kingsway neighborhood.",
                  },
                  {
                    Name: "Lambton Golf and Country Club",
                    Description:
                      "Private golf and country club in The Kingsway.",
                  },
                ],
                Nearby: ["Islington-City Centre West"],
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
                Landmarks: [
                  {
                    Name: "The Met",
                    Description:
                      "Metropolitan Museum of Art with an extensive art collection.",
                  },
                  {
                    Name: "Central Park",
                    Description:
                      "Iconic urban park with recreational facilities and landmarks.",
                  },
                  {
                    Name: "Museum Mile",
                    Description:
                      "Stretch of Fifth Avenue with numerous museums and cultural institutions.",
                  },
                ],
                Nearby: ["Chelsea", "Harlem"],
              },
              {
                Name: "Chelsea",

                Landmarks: [
                  {
                    Name: "High Line",
                    Description:
                      "Elevated linear park built on a former railway track.",
                  },
                  {
                    Name: "Chelsea Market",
                    Description:
                      "Food hall and shopping complex in a historic building.",
                  },
                  {
                    Name: "The Vessel",
                    Description:
                      "Sculptural staircase and landmark in Hudson Yards.",
                  },
                ],
                Nearby: ["Upper East Side", "Harlem"],
              },
              {
                Name: "Harlem",
                Landmarks: [
                  {
                    Name: "Apollo Theater",
                    Description:
                      "Historic music venue showcasing African American talent.",
                  },
                  {
                    Name: "Marcus Garvey Park",
                    Description:
                      "Public park with recreational facilities and cultural events.",
                  },
                  {
                    Name: "Studio Museum in Harlem",
                    Description:
                      "Contemporary art museum focusing on African American artists.",
                  },
                ],
                Nearby: ["Upper East Side", "Chelsea"],
              },
            ],
          },
          {
            Name: "Brooklyn",
            Neighbourhoods: [
              {
                Name: "Williamsburg",
                Landmarks: [
                  {
                    Name: "Brooklyn Brewery",
                    Description: "Craft brewery with tours and tastings.",
                  },
                  {
                    Name: "Williamsburg Bridge",
                    Description:
                      "Suspension bridge connecting Manhattan and Brooklyn.",
                  },
                  {
                    Name: "East River State Park",
                    Description: "Park with waterfront views and events.",
                  },
                ],
                Nearby: ["DUMBO", "Park Slope"],
              },
              {
                Name: "DUMBO",
                Landmarks: [
                  {
                    Name: "Brooklyn Bridge",
                    Description:
                      "Iconic bridge connecting Manhattan and Brooklyn.",
                  },
                  {
                    Name: "Jane's Carousel",
                    Description:
                      "Historic carousel with stunning views of the skyline.",
                  },
                  {
                    Name: "St. Ann's Warehouse",
                    Description:
                      "Performing arts venue in a renovated tobacco warehouse.",
                  },
                ],
                Nearby: ["Williamsburg", "Park Slope"],
              },
              {
                Name: "Park Slope",
                Landmarks: [
                  {
                    Name: "Prospect Park",
                    Description:
                      "Large park with a zoo, lake, and outdoor activities.",
                  },
                  {
                    Name: "Brooklyn Museum",
                    Description:
                      "Art museum featuring a diverse collection of artworks.",
                  },
                  {
                    Name: "Barclays Center",
                    Description:
                      "Multi-purpose arena hosting sports and entertainment events.",
                  },
                ],
                Nearby: ["Williamsburg", "DUMBO"],
              },
            ],
          },
          {
            Name: "Queens",
            Neighbourhoods: [
              {
                Name: "Astoria",
                Landmarks: [
                  {
                    Name: "Astoria Park",
                    Description:
                      "Waterfront park with sports facilities and views of Manhattan.",
                  },
                  {
                    Name: "Museum of the Moving Image",
                    Description:
                      "Media museum with exhibits on film, television, and digital media.",
                  },
                  {
                    Name: "Bohemian Hall & Beer Garden",
                    Description:
                      "Cultural venue and beer garden with Czech and Slovak influences.",
                  },
                ],
                Nearby: ["Flushing", "Long Island City"],
              },
              {
                Name: "Flushing",
                Landmarks: [
                  {
                    Name: "Flushing Meadows-Corona Park",
                    Description:
                      "Large park with sports facilities, a zoo, and cultural institutions.",
                  },
                  {
                    Name: "Queens Botanical Garden",
                    Description:
                      "Botanical garden with themed gardens and educational programs.",
                  },
                  {
                    Name: "Citi Field",
                    Description:
                      "Home stadium of the New York Mets baseball team.",
                  },
                ],
                Nearby: ["Astoria", "Long Island City"],
              },
              {
                Name: "Long Island City",
                Landmarks: [
                  {
                    Name: "Gantry Plaza State Park",
                    Description:
                      "Waterfront park with views of the Manhattan skyline.",
                  },
                  {
                    Name: "MoMA PS1",
                    Description:
                      "Contemporary art museum housed in an old school building.",
                  },
                  {
                    Name: "Queensboro Bridge",
                    Description:
                      "Cantilever bridge connecting Queens and Manhattan.",
                  },
                ],
                Nearby: ["Astoria", "Flushing"],
              },
            ],
          },
          {
            Name: "The Bronx",
            Neighbourhoods: [
              {
                Name: "Riverdale",
                Landmarks: [
                  {
                    Name: "Wave Hill",
                    Description:
                      "Public garden with stunning views of the Hudson River.",
                  },
                  {
                    Name: "Van Cortlandt Park",
                    Description:
                      "Large park with sports facilities and natural areas.",
                  },
                  {
                    Name: "Bronx Zoo",
                    Description:
                      "One of the largest metropolitan zoos in the world.",
                  },
                ],
                Nearby: ["Fordham", "Throgs Neck"],
              },
              {
                Name: "Fordham",
                Landmarks: [
                  {
                    Name: "Fordham University",
                    Description:
                      "Private research university with a historic campus.",
                  },
                  {
                    Name: "Bronx Park",
                    Description:
                      "Park with the New York Botanical Garden and Bronx Zoo.",
                  },
                  {
                    Name: "New York Botanical Garden",
                    Description:
                      "Botanical garden featuring a diverse collection of plants.",
                  },
                ],
                Nearby: ["Riverdale", "Throgs Neck"],
              },
              {
                Name: "Throgs Neck",
                Landmarks: [
                  {
                    Name: "Throgs Neck Bridge",
                    Description:
                      "Suspension bridge connecting the Bronx and Queens.",
                  },
                  {
                    Name: "Fort Schuyler",
                    Description:
                      "Historic fort with a museum on the SUNY Maritime College campus.",
                  },
                  {
                    Name: "SUNY Maritime College",
                    Description:
                      "Public maritime college offering undergraduate and graduate programs.",
                  },
                ],
                Nearby: ["Riverdale", "Fordham"],
              },
            ],
          },
          {
            Name: "Staten Island",
            Neighbourhoods: [
              {
                Name: "St. George",
                Landmarks: [
                  {
                    Name: "St. George Theatre",
                    Description:
                      "Historic theater with performances and events.",
                  },
                  {
                    Name: "Staten Island Ferry Terminal",
                    Description:
                      "Transportation hub for the Staten Island Ferry.",
                  },
                  {
                    Name: "Richmond County Bank Ballpark",
                    Description: "Baseball stadium hosting minor league games.",
                  },
                ],
                Nearby: ["Tottenville", "New Dorp"],
              },
              {
                Name: "Tottenville",
                Landmarks: [
                  {
                    Name: "Conference House Park",
                    Description:
                      "Historic park with a mansion and waterfront views.",
                  },
                  {
                    Name: "Tottenville Library",
                    Description:
                      "Public library serving the Tottenville community.",
                  },
                  {
                    Name: "Historic Richmond Town",
                    Description:
                      "Living history village and museum showcasing colonial life.",
                  },
                ],
                Nearby: ["St. George", "New Dorp"],
              },
              {
                Name: "New Dorp",
                Landmarks: [
                  {
                    Name: "New Dorp Beach",
                    Description:
                      "Beach area with waterfront views and recreational opportunities.",
                  },
                  {
                    Name: "Miller Field",
                    Description: "Park with sports fields and facilities.",
                  },
                  {
                    Name: "Historic Richmond Town",
                    Description:
                      "Living history village and museum showcasing colonial life.",
                  },
                ],
                Nearby: ["St. George", "Tottenville"],
              },
            ],
          },
        ],
      },
    },
  },
};

module.exports = locationData;
