import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemButton from '@mui/material/ListItemButton';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(to right, #1e293b, #334155)",
          boxShadow: 3,
          py: 1
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white"
            }}
          >
            <TerrainIcon sx={{ fontSize: 40, color: "#93c5fd", mr: 1 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", lineHeight: 1 }}>
                Woolly Wonders
              </Typography>
              <Typography variant="caption" sx={{ color: "#bfdbfe" }}>
                Formerly Land of Wool and Felt
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  color: isActive(link.path) ? "#93c5fd" : "white",
                  borderBottom: isActive(link.path) ? "2px solid #93c5fd" : "none",
                  borderRadius: 0,
                  fontSize: "1rem",
                  "&:hover": {
                    color: "#93c5fd",
                    background: "transparent"
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Desktop Location */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1 }}>
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2">Delaware, USA</Typography>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, pt: 2 }}>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={() => setOpen(false)}
                sx={{
                  fontWeight: isActive(link.path) ? 'bold' : 'normal',
                  color: isActive(link.path) ? '#1e40af' : 'inherit',
                }}
              >
                {link.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
