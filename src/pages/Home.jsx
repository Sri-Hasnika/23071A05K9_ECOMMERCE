import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: '99.99',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '149.99',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '199.99',
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
        Welcome to Our E-Commerce Store
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
        Discover amazing products at great prices
      </Typography>

      <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 4 }}>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {featuredProducts.map((product) => (
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
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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

export default Home; 