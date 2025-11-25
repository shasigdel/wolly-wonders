import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import TerrainIcon from "@mui/icons-material/Terrain";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e293b",
        color: "white",
        py: 8,
        px: 2,
        mt: 6,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4} mb={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <TerrainIcon sx={{ fontSize: 36, color: "#93c5fd", mr: 1 }} />
              <Typography variant="h5" fontWeight="bold">
                Woolly Wonders
              </Typography>
            </Box>

            <Typography sx={{ color: "#cbd5e1", mb: 1 }}>
              Bringing Himalayan warmth to your winter wardrobe<br />
              Since 2013.
            </Typography>

            <Typography variant="body2" sx={{ color: "#94a3b8" }}>
              Delaware, USA • Handcrafted in Nepal
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#93c5fd", mb: 2 }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Typography
                  key={item.to}
                  component={Link}
                  to={item.to}
                  sx={{
                    textDecoration: "none",
                    color: "#cbd5e1",
                    "&:hover": { color: "white" },
                    transition: "0.2s",
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Values */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#93c5fd", mb: 2 }}
            >
              Our Values
            </Typography>

            <Box sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
              <Typography>✓ Ethical Craftsmanship</Typography>
              <Typography>✓ Sustainable Sourcing</Typography>
              <Typography>✓ Fair Trade Practices</Typography>
              <Typography>✓ Community Support</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#334155", mb: 3 }} />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#94a3b8" }}
        >
          © {new Date().getFullYear()} Woolly Wonders. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
