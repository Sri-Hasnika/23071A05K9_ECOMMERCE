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
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$149.99',
      description: 'High-quality product for your needs',
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$199.99',
      description: 'Premium product with advanced features',
      image: 'data:image/jpeg;base64,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',
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