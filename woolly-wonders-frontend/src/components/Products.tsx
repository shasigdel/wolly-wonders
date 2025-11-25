import React from 'react';
import { Box, Container, Grid, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  '/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg', '/5.jpeg',
  '/6.jpeg', '/7.jpeg', '/8.jpeg',
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, bgcolor: '#f0f4f8' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {products.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: 250,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover img': { transform: 'scale(1.1)', transition: '0.5s' },
                }}
                onClick={() => navigate('/contact')}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Product ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
