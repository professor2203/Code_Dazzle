import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const MrUmair = () => {
  return (
<Box>
    <Box
      sx={{
        height: { xs: 300, md: 400 }, // Adjust height for responsiveness
        backgroundImage: "url('./image.png')", // Replace with the actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        textAlign: 'center',
      }}
    >

      {/* Content Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, px: 2 }}>
        <Grid container spacing={4} alignItems="center">
          
          {/* Left Side: Text Section */}
          <Grid item xs={12} md={6}>
            
          </Grid>

          {/* Right Side: Image Section */}
          
          
        </Grid>
      </Box>
    </Box>
    <Box sx={{ py: { xs: 4, md: 8 }, px: 2 }}>
    <Grid container spacing={4} alignItems="center">
      
      {/* Left Side: Text Section */}
      <Grid item xs={12} md={6}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Mr Umair
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              lineHeight: 1.6,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Welcome to Mr Umair's profile page. Discover more about her background, interests, and accomplishments.
          </Typography>
        </Box>
      </Grid>

      {/* Right Side: Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="/path/to/your/image.jpg" // Replace with the actual image path
          alt="Miss Tuba"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Grid>
      
    </Grid>
  </Box>
  </Box>
  );
};

export default MrUmair;
