// src/pages/Portfolio.jsx
import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import AboutHeader from "../components/AboutHeader";
import AboutSection from "../components/AboutSection";

// Sample portfolio data
const portfolioItems = [
  { title: "Buddy.Ai", description: "Early learning AI teacher", imageUrl: "./baddiai.png" },
  { title: "Dabomb Fizzers", description: "Every bath bomb Has a surprise inside", imageUrl: "./Dabobm.png" },
  { title: "Japanese Dream Tour", description: "MULTI-TRADE FAMILY RUN CONSTRUCTION COMPANY SERVING", imageUrl: "./japanesedreamtour.png" },
  { title: "Straw Hat Renovations", description: "Open your eyes to Hokkaido the hidden world", imageUrl: "./StrawHat.png" },
  { title: "digitalocean", description: "Powerful customer experiences", imageUrl: "./fooji.png" },
  { title: "foodbomb", description: "ORDERING WITHOUT ADMIN", imageUrl: "./Foodbom.png" },
  { title: "Earlx", description: "Welcome to Earlux—the widest choice of High-Quality Bluetooth Hearing Aids and Hearing Solutions. For everyone.", imageUrl: "./earlx.png" },
  { title: "Rooza", description: "Get your business moving with online marketing", imageUrl: "./rooza.png" },
  { title: "The Lex", description: "THE LEX Exclusive Law Magazine", imageUrl: "./Thelex.png" },
];

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
  const showAll = visibleItems >= portfolioItems.length;

  const handleViewMore = () => {
    setVisibleItems(showAll ? 4 : portfolioItems.length); // Toggle between showing 4 items and all items
  };

  return (
    <>
      <AboutHeader title="Portfolio" backgroundImage="" /> {/* Add your desired header image */}
      <AboutSection heading="Portfolio Code Dazzle" para="Lorem ipsum is simply dummy text of the printing and typesetting industry." />
      
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {portfolioItems.slice(0, visibleItems).map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imageUrl}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View More button */}
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleViewMore}>
            {showAll ? "Show Less" : "View More"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
