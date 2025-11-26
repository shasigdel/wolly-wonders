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
      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "white",
    py: { xs: 1, sm: 3, md: 6 }, // reduced padding on mobile
    gap: { xs: 8, md: 10 }, // spacing between logo and text
  }}
>
  {/* Logo */}
  <Box
    component="img"
    src="/woolly-wonders.png"
    alt="Woolly Wonders Logo"
    sx={{
      width: { xs: 200, sm: 300, md: 350, lg: 400 }, // slightly bigger on mobile
      height: "auto",
    }}
  />

  {/* Welcome Section */}
  <Box
    sx={{
      textAlign: { xs: "center", md: "left" },
      maxWidth: { xs: "100%", md: "500px" },
    }}
  >
    <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
      Welcome to Woolly Wonders
    </Typography>

    <Typography variant="h6" color="text.secondary" mb={4} lineHeight={1.7}>
      Since 2013, we've been bringing authentic Himalayan craftsmanship to Delaware 
      and beyond. Every piece in our collection is handmade with care by skilled 
      artisans in Nepal.
    </Typography>

    <Box display="flex" flexWrap="wrap" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
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
</Box>


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

      <Box py={8} sx={{ bgcolor: "#f8fafc" }}>
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Contact Us
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Text us at: <Box component="span" fontWeight="bold">302-563-0058</Box>
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Visit us at: <Box component="span" fontWeight="bold">Baltimore Christmas Village, West Shore Park</Box>
            </Typography>

            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 2 }}
            >
              Send a Message
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Values Section */}
      <Values />

     {/* Christmas Market Section */}
<Box py={12} sx={{ background: "linear-gradient(90deg, #2563EB, #4F46E5)" }}>
  <Container maxWidth="lg"> {/* Use larger container */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 6, md: 4 }, // balanced spacing
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src="/baltimore-christmas.png"
        alt="Baltimore Christmas Village"
        sx={{
          flex: { md: 1 },
          width: { xs: "100%", md: "50%" }, // take half space on desktop
          height: "auto",
          borderRadius: 3,
          objectFit: "contain",
        }}
      />

      {/* Text Card */}
      <Paper
        elevation={6}
        sx={{
          flex: { md: 1 },
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          textAlign: "center",
          width: { xs: "100%", md: "50%" }, // ensure proper width
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
          Find Us at Christmas Village
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          We've been proud participants in Christmas Village since our beginning. 
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
    </Box>
  </Container>
</Box>


    </Box>
  );
};

export default HomePage;
