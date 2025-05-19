import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
} from '@mui/material';

function Catalogue() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$99.99',
      description: 'Amazing product with great features',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$149.99',
      description: 'High-quality product for your needs',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$199.99',
      description: 'Premium product with advanced features',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$79.99',
      description: 'Affordable product with great value',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$299.99',
      description: 'Luxury product with premium features',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 6,
      name: 'Product 6',
      price: '$129.99',
      description: 'Popular product with great reviews',
      image: 'https://via.placeholder.com/200',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Product Catalogue
      </Typography>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Search products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Catalogue; 