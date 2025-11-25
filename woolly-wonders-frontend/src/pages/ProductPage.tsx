import React from 'react';
import Products from '../components/Products';
import { Box, Typography, Button, Container, Paper } from '@mui/material';

const ProductsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Our Products
          </Typography>
          <Typography variant="h6">
            Discover our curated collection of handcrafted Himalayan textiles
          </Typography>
        </Container>
      </Box>

      {/* Products Section */}
      <Products />

      {/* Custom Orders Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.100' }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6, textAlign: 'center', border: '2px dashed', borderColor: 'primary.light' }}>
            <Typography variant="h4" gutterBottom>
              Looking for Something Specific?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We can help you find the perfect piece or discuss custom orders. Each item is crafted with care by our skilled artisans in Nepal.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us About Custom Orders
            </Button>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default ProductsPage;
