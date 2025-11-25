import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #2563eb, #4f46e5)",
        color: "white",
        py: { xs: 10, md: 16 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Himalayan Craftsmanship
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.7,
            opacity: 0.95,
          }}
        >
          High-quality winter clothing and accessories inspired by the rich
          artisanal heritage of the Himalayas.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.1rem",
          }}
        >
          Ethically made in Nepal by skilled Himalayan artisans since 2013.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
