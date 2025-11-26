import React, { useState } from 'react';
import { Phone, ContentCopy } from '@mui/icons-material';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [desktopDialog, setDesktopDialog] = useState(false);

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const myPhoneNumber = import.meta.env.VITE_PHONE_NUMBER;

    const smsBody = `New Product Inquiry:
Name: ${formData.name}
Customer Phone: ${formData.phone}
Message: ${formData.message}`;

    if (isMobileDevice()) {
      const smsLink = `sms:${myPhoneNumber}?body=${encodeURIComponent(smsBody)}`;
      window.location.href = smsLink;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 3000);

      return;
    }

    // Desktop → show popup
    setDesktopDialog(true);
  };

  const handleCopy = () => {
    const myPhoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    navigator.clipboard.writeText(myPhoneNumber);
    alert('Phone number copied!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

              <Typography variant="caption" align="center">
                On mobile, this opens your SMS app.<br />
                On desktop, you'll get our phone number to text manually.
              </Typography>
            </Box>
          </Paper>
        )}
      </Box>

      {/* Desktop popup */}
      <Dialog open={desktopDialog} onClose={() => setDesktopDialog(false)}>
        <DialogTitle>Text Us</DialogTitle>

        <DialogContent>
          <Typography>
            You're using a computer. SMS apps do not open on laptops.
          </Typography>

          <Typography sx={{ mt: 2, fontWeight: 'bold' }}>
            Please text us at:
          </Typography>

          <Typography variant="h5" sx={{ mt: 1 }}>
            {import.meta.env.VITE_PHONE_NUMBER}
          </Typography>
        </DialogContent>

        <DialogActions>
          <IconButton onClick={handleCopy}>
            <ContentCopy />
          </IconButton>
          <Button onClick={() => setDesktopDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
