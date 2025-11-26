import React from 'react';
import { People } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LandscapeIcon from '@mui/icons-material/Landscape';

import { Box, Typography, Paper, Avatar } from '@mui/material';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const Values: React.FC = () => {
  const values: ValueCard[] = [
    {
      icon: <FavoriteIcon fontSize="large" />,
      title: 'Ethical Craftsmanship',
      description:
        'All products are handmade by skilled Himalayan artisans, respecting tradition.',
      bgColor: '#E3F2FD',
      iconColor: '#1976D2',
    },
    {
      icon: <LandscapeIcon fontSize="large" />,
      title: 'Sustainable Sourcing',
      description:
        'We use eco-friendly materials and practices, ensuring our products honor the planet.',
      bgColor: '#E8F5E9',
      iconColor: '#388E3C',
    },
    {
      icon: <People fontSize="large" />,
      title: 'Community Connection',
      description:
        'Since 2013, we’ve connected communities through Christmas markets and local events.',
      bgColor: '#F3E5F5',
      iconColor: '#7B1FA2',
    },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What We Stand For
      </Typography>

      {/* Responsive flex container */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {values.map((value, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(33% - 16px)',
              },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { boxShadow: 8 },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: value.bgColor,
                  color: value.iconColor,
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                {value.icon}
              </Avatar>

              <Typography variant="h6" gutterBottom>
                {value.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Values;
