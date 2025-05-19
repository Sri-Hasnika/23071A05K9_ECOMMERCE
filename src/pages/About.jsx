import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';

function About() {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Shipping',
      description: 'We offer quick and reliable shipping to all our customers.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Shopping',
      description: 'Your security is our priority with encrypted transactions.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Our customer support team is always ready to help you.',
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Payments',
      description: 'Multiple payment options for your convenience.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        About Us
      </Typography>
      <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
        Welcome to our e-commerce platform, where we strive to provide the best
        shopping experience for our customers. We are committed to offering
        high-quality products, excellent customer service, and a seamless shopping
        experience.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide customers with a wide selection of high-quality
          products at competitive prices, delivered with exceptional customer
          service.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          We envision becoming the leading e-commerce platform, known for our
          commitment to customer satisfaction, innovation, and sustainable
          business practices. We aim to continuously expand our product range
          while maintaining the highest standards of quality and service.
        </Typography>
      </Paper>
    </Container>
  );
}

export default About; 