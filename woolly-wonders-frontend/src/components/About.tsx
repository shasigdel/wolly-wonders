import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "white" }}>
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 6, color: "rgb(30 41 59)" }} // slate-800
        >
          Our Story
        </Typography>

        {/* Card */}
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
          }}
        >
          <Box sx={{ color: "rgb(51 65 85)", lineHeight: 1.8 }}> {/* slate-700 */}
            <Typography variant="h6" sx={{ mb: 2, fontSize: "1.125rem" }}>
              Woolly Wonders is a Delaware-based business specializing in
              high-quality winter clothing and accessories inspired by the rich
              artisanal heritage of the Himalayas. Since 2013, we have proudly
              offered a curated collection of handcrafted woolen sweaters, cozy
              cold-weather essentials, and a wide variety of vibrant felted
              products — all ethically made in Nepal by skilled Himalayan
              artisans.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontSize: "1.125rem" }}>
              Our commitment to craftsmanship, authenticity, and sustainable
              sourcing has been at the heart of our business from the beginning.
              Since our inception, we have been a dedicated participant in
              Christmas markets, sharing the warmth and artistry of Himalayan
              textiles with communities year after year.
            </Typography>

            <Typography variant="h6" sx={{ fontSize: "1.125rem" }}>
              At Woolly Wonders, every piece tells a story of tradition,
              quality, and care — bringing the charm of Nepal to your winter
              wardrobe.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
