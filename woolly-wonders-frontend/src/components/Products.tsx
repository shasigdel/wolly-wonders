import React from 'react';
import { Box, Container, Card, CardMedia } from '@mui/material';
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {products.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(25% - 16px)'
                }
              }}
            >
              <Card
                sx={{
                  height: 250,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover img': {
                    transform: 'scale(1.1)',
                    transition: '0.5s',
                  },
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
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
