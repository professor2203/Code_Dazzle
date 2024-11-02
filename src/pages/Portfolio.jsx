// src/pages/Portfolio.jsx
import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import AboutHeader from "../components/AboutHeader";
import AboutSection from "../components/AboutSection";


// Sample portfolio data
const portfolioItems = [
  { title: "Buddy.Ai", description: "Early learning AI teacher", imageUrl: "./baddiai.png" },
  { title: "Dabomb Fizzers", description: "Every bath bomb  Has a surprise inside", imageUrl: "./Dabobm.png" },
  { title: "Japanese Dream Tour", description: "MULTI-TRADE FAMILY RUN CONSTRUCTION COMPANY SERVING", imageUrl: "./japanesedreamtour.png" },
  { title: "Straw Hat Renovations", description: "Open your eyes toHokkaidothe hidden world", imageUrl: "./StrawHat.png" },
];

export default function Portfolio() {
  return (<>
    <AboutHeader 
        title="Portfolio"
        backgroundImage="" // Use your desired header image
      />
          <AboutSection
    heading="portfolio Code Dazzle" para="Lorem ipsum is simply dummy text of the printing and typesetting industry."/>

    
    <Box>
      {/* Header Section */}
     

      {/* Portfolio Card Grid */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {portfolioItems.map((item, index) => (
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
      </Box>
    </Box>
    </>
  );
}
