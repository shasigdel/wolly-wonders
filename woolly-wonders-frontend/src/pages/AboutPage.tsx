import React from "react";
import { Box, Container, Typography, Paper, Grid, Avatar } from "@mui/material";
import { Favorite, CalendarToday, Public } from '@mui/icons-material';
import About from "../components/About"; // import reusable About section

const milestones = [
  {
    year: "2013",
    title: "Our Beginning",
    description:
      "Woolly Wonders (formerly Land of Wool and Felt) was founded with a mission to bring authentic Himalayan craftsmanship to the United States.",
    icon: <CalendarToday />,
  },
  {
    year: "2013-Present",
    title: "Christmas Markets",
    description:
      "Dedicated participants in Christmas markets, sharing the warmth and artistry of Himalayan textiles with local communities.",
    icon: <Favorite />,
  },
  {
    year: "Today",
    title: "Global Impact",
    description:
      "Supporting skilled artisans in Nepal while providing customers with ethically-made, high-quality winter wear.",
    icon: <Public />,
  },
];

const AboutPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6">
            Learn about our journey and commitment to ethical craftsmanship
          </Typography>
        </Container>
      </Box>

      {/* Reusable "Our Story" Section */}
      <About />

      {/* Mission Section */}
      <Box sx={{ py: 8, bgcolor: "grey.100", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Paper sx={{ p: 4, bgcolor: "primary.light", color: "primary.contrastText" }}>
            <Typography variant="body1">
              To preserve and celebrate traditional Himalayan craftsmanship while supporting fair trade
              practices and sustainable sourcing. We believe every purchase should make a positive impact
              on both the artisan and the environment.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Milestones / Journey */}
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Our Journey
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {milestones.map((milestone, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 3, display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Avatar sx={{ bgcolor: "primary.light", color: "primary.main" }}>
                    {milestone.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" color="primary.main">
                      {milestone.year}
                    </Typography>
                    <Typography variant="h6">{milestone.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
