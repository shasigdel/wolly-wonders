import React from 'react';
import Contact from '../components/Contact';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: 'Location',
      details: ['Baltimore, USA', 'Find us at Baltimore Christmas Village - West Shore Park'],
      color: 'primary.main',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Phone',
      details: ['Text us at +1 302 563 0058', 'Quick response guaranteed'],
      color: 'success.main',
    },
    {
      icon: <MailIcon fontSize="large" />,
      title: 'Social Media',
      details: ['Follow us in Facebook - Woolly Wonders', 'See new arrivals first'],
      color: 'error.main',
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: 'Market Hours',
      details: ['Visit us at Christmas markets', 'Seasonal availability'],
      color: 'warning.main',
    },
  ];

  return (
    <div>
      {/* HERO */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="h6" maxWidth={600} mx="auto">
          We'd love to hear from you! Send us a message and we'll respond promptly.
        </Typography>
      </Box>

      {/* CONTACT CARDS */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {contactInfo.map((info, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                width: { xs: '100%', sm: '45%', md: '22%' },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: info.color,
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 2,
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
          ))}
        </Box>
      </Box>

      {/* CONTACT FORM */}
      <Contact />

      {/* FAQ */}
      <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>

          {[
            {
              question: 'Where can I see your products in person?',
              answer:
                "We participate in Christmas Village throughout November in Baltimore. Contact us to find out where we'll be next!",
            },
            {
              question: 'Do you offer custom orders?',
              answer:
                'Yes! We work with our artisans in Nepal to create custom pieces. Send us a message with your requirements.',
            },
            {
              question: 'How long does shipping take?',
              answer:
                'Contact us for current shipping times. Each piece is handmade, so timing may vary based on availability.',
            },
          ].map((faq, idx) => (
            <Paper sx={{ p: 3 }} key={idx}>
              <Typography variant="h6" gutterBottom>
                {faq.question}
              </Typography>
              <Typography variant="body1">{faq.answer}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default ContactPage;
