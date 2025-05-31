import React from 'react';
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
} from '@mui/joy';

const Main: React.FC = () => {
  return (
    <Box component='main'>
      {/* Header Section */}
      <Box
        component='header'
        sx={{
          background: 'linear-gradient(135deg, #e8f5e9 0%, #4caf50 100%)',
          py: { xs: 4, md: 6 },
        }}
      >
        <Container maxWidth='lg'>
          <Stack spacing={4}>
            <Typography
              level='h1'
              fontSize='clamp(2.5rem, 2rem + 2vw, 3.5rem)'
              sx={{
                background: 'linear-gradient(45deg, #1b5e20, #388e3c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              SAPID Research
            </Typography>

            <Typography level='h2'>Advancing Research & Innovation</Typography>

            {/* Navigation */}
            <Box component='nav'>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                alignItems='center'
              >
                <Button variant='plain' color='neutral'>
                  Home
                </Button>
                <Button variant='plain' color='neutral'>
                  Services
                </Button>
                <Button variant='plain' color='neutral'>
                  Contact
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Register & Sign Up Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: '#ffffff',
        }}
      >
        <Container maxWidth='lg'>
          <Typography level='h2' sx={{ mb: 4, textAlign: 'center' }}>
            Join Our Research Community
          </Typography>
          <Grid container spacing={4} justifyContent='center'>
            <Grid xs={12} md={6}>
              <Card variant='outlined'>
                <CardContent>
                  <Stack spacing={2} alignItems='center'>
                    <Typography level='h3'>Register Now</Typography>
                    <Button size='lg' color='primary' variant='solid'>
                      Sign Up
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: '#f5f5f5',
        }}
      >
        <Container maxWidth='lg'>
          <Typography level='h2' sx={{ mb: 4, textAlign: 'center' }}>
            About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography level='h3'>Our Mission</Typography>
                  <Typography level='body-md'>
                    Advancing research through innovation and collaboration
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography level='h3'>Our Vision</Typography>
                  <Typography level='body-md'>
                    Leading the future of scientific discovery
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography level='h3'>Our Values</Typography>
                  <Typography level='body-md'>
                    Excellence, integrity, and innovation
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: '#ffffff',
        }}
      >
        <Container maxWidth='lg'>
          <Typography level='h2' sx={{ mb: 4, textAlign: 'center' }}>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            {/* Testimonial 1 */}
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack spacing={2} alignItems='center'>
                    <Avatar size='lg' />
                    <Typography level='body-lg' sx={{ fontStyle: 'italic' }}>
                      "Outstanding research facilities and support."
                    </Typography>
                    <Typography level='body-sm'>- Dr. Sarah Johnson</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            {/* Testimonial 2 */}
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack spacing={2} alignItems='center'>
                    <Avatar size='lg' />
                    <Typography level='body-lg' sx={{ fontStyle: 'italic' }}>
                      "Innovative approach to research methodology."
                    </Typography>
                    <Typography level='body-sm'>
                      - Prof. Michael Chen
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            {/* Testimonial 3 */}
            <Grid xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack spacing={2} alignItems='center'>
                    <Avatar size='lg' />
                    <Typography level='body-lg' sx={{ fontStyle: 'italic' }}>
                      "Excellent collaborative environment."
                    </Typography>
                    <Typography level='body-sm'>
                      - Dr. Emily Martinez
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Main;
