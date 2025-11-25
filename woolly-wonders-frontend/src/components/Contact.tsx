import React, { useState } from 'react';
import { Phone } from '@mui/icons-material';
import { TextField, Button, Paper, Typography, Box, Alert } from '@mui/material';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const myPhoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    // console.log(myPhoneNumber)
    const smsBody =
      `New Product Inquiry:\nName: ${formData.name}\nCustomer Phone: ${formData.phone}\nMessage: ${formData.message}`;
    const smsLink = `sms:${myPhoneNumber}?body=${encodeURIComponent(smsBody)}`;
    window.location.href = smsLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f3f4f6', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Get In Touch
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Interested in our products? Send us a message and we'll text you back!
      </Typography>

      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        {submitted ? (
          <Alert severity="success">
            Thank you for your message! Your SMS app should open shortly.
          </Alert>
        ) : (
          <Paper sx={{ p: 4 }} elevation={3}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={5}
                required
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                endIcon={<Phone />}
                onClick={handleSubmit}
                fullWidth
                size="large"
              >
                Send Message via SMS
              </Button>
              <Typography variant="caption" align="center" color="textSecondary">
                Clicking submit will open your SMS app with your message pre-filled
              </Typography>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Contact;
