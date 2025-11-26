import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Container, Paper, Typography, CardMedia } from "@mui/material";

import Values from "../components/Values";

// Carousel images
const carouselImages = [
  '/2.jpeg',
  '/3.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg'
];

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box>
      {/* Hero Carousel */}
      <Box sx={{ bgcolor: "#f0f0f0", py: { xs: 2, sm: 4, md: 6 } }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "80%" }}>
            <Slider {...settings}>
              {carouselImages.map((img, index) => (
                <Box key={index}>
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Slide ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: { xs: 250, sm: 350, md: 500 },
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>

      {/* Welcome Section */}
      <Box py={12} bgcolor="#ffffff">
        <Container maxWidth="md">
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
              Welcome to Woolly Wonders
            </Typography>

            <Typography variant="h6" color="text.secondary" mb={4} lineHeight={1.7}>
              Since 2013, we've been bringing authentic Himalayan craftsmanship to Delaware 
              and beyond. Every piece in our collection is handmade with care by skilled 
              artisans in Nepal.
            </Typography>

            {/* Buttons */}
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/products"
                endIcon={<ArrowRightAltIcon />}
                sx={{ px: 4, py: 1.5, borderRadius: 2 }}
              >
                Shop Our Collection
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/about"
                sx={{ px: 4, py: 1.5, borderRadius: 2, borderWidth: 2 }}
              >
                Learn Our Story
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
      <Values />

      {/* Christmas Market Section */}
      <Box py={12} sx={{ background: "linear-gradient(90deg, #2563EB, #4F46E5)" }}>
        <Container maxWidth="md">
          <Paper elevation={6} sx={{ p: 6, borderRadius: 3, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
              Find Us at Christmas Markets
            </Typography>

            <Typography variant="h6" color="text.secondary" mb={4}>
              We've been proud participants in Christmas markets since our beginning. 
              Come visit us to see and feel the quality of our products in person!
            </Typography>

            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              endIcon={<ArrowRightAltIcon />}
              sx={{ px: 4, py: 1.5, borderRadius: 2 }}
            >
              Get In Touch
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
