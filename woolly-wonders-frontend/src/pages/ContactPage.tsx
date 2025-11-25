import React from 'react';
import Contact from '../components/Contact';
import { Grid, Typography, Box, Paper, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: 'Location',
      details: ['Delaware, USA', 'Find us at local Christmas markets'],
      color: 'primary.main'
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      details: ['Text us for inquiries', 'Quick response guaranteed'],
      color: 'success.main'
    },
    {
      icon: <MailIcon fontSize="large" />,
      title: 'Social Media',
      details: ['Follow us for updates', 'See new arrivals first'],
      color: 'error.main'
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: 'Market Hours',
      details: ['Visit us at Christmas markets', 'Seasonal availability'],
      color: 'warning.main'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="h6" maxWidth={600} mx="auto">
          We'd love to hear from you! Send us a message and we'll respond promptly.
        </Typography>
      </Box>

      {/* Contact Cards */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: info.color,
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  {info.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                {info.details.map((detail, idx) => (
                  <Typography variant="body2" color="text.secondary" key={idx}>
                    {detail}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form */}
      <Contact />

      {/* FAQ Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Box maxWidth={800} mx="auto">
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Where can I see your products in person?
                </Typography>
                <Typography variant="body1">
                  We participate in Christmas markets throughout the season. Contact us to find out where we'll be next!
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Do you offer custom orders?
                </Typography>
                <Typography variant="body1">
                  Yes! We work with our artisans in Nepal to create custom pieces. Send us a message with your requirements.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  How long does shipping take?
                </Typography>
                <Typography variant="body1">
                  Contact us for current shipping times. Each piece is handmade, so timing may vary based on availability.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ContactPage;
