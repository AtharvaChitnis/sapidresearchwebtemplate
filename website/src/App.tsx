import React from 'react';
import Typography from '@mui/joy/Typography';
import { createRoot } from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { extendTheme, ThemeProvider } from '@mui/joy/styles';
import { CssBaseline, Container, Box, Button, Grid } from '@mui/joy';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          500: '#9e9e9e',
          800: '#424242',
        },
        background: {
          body: '#ffffff',
          surface: '#f5f5f5',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#666666',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component='main'
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e8f5e9 0%, #4caf50 100%)',
        }}
      >
        {/* Hero Section */}
        <Container
          maxWidth='lg'
          sx={{
            pt: { xs: 4, sm: 8, md: 12 },
            pb: { xs: 8, sm: 12, md: 16 },
          }}
        >
          <Grid container spacing={4}>
            {/* Hero Image Section */}
            <Grid xs={12} md={5}>
              <Box
                sx={{
                  height: { xs: '250px', md: '400px' },
                  background:
                    'linear-gradient(45deg, #81c784 0%, #2e7d32 100%)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'lg',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { xs: 4, md: 0 },
                }}
              >
                <Typography level='h2' sx={{ color: 'white' }}>
                  [Your Hero Image]
                </Typography>
              </Box>
            </Grid>

            {/* Main Content */}
            <Grid xs={12} md={7}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                <Typography
                  level='h1'
                  fontWeight='xl'
                  fontSize='clamp(2.5rem, 2rem + 2vw, 3.5rem)'
                  sx={{
                    background: 'linear-gradient(45deg, #1b5e20, #388e3c)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: 2,
                  }}
                >
                  Welcome to SAPID Research
                </Typography>

                <Typography
                  level='body-lg'
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  Advancing the frontiers of knowledge through innovative
                  research and collaborative discovery
                </Typography>

                <Button
                  size='lg'
                  variant='solid'
                  color='primary'
                  sx={{
                    maxWidth: '200px',
                    fontSize: 'lg',
                    fontWeight: 600,
                    py: 2,
                  }}
                >
                  Start Exploring
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Three Column Features Section */}
          <Grid container spacing={4} sx={{ mt: { xs: 6, md: 12 } }}>
            {/* Column 1 */}
            <Grid xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography level='h3' fontWeight='lg'>
                  Innovation
                </Typography>
                <Typography level='body-md'>
                  Pushing boundaries with cutting-edge research methodologies
                  and technologies
                </Typography>
              </Box>
            </Grid>

            {/* Column 2 */}
            <Grid xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography level='h3' fontWeight='lg'>
                  Collaboration
                </Typography>
                <Typography level='body-md'>
                  Building partnerships across disciplines and institutions
                  worldwide
                </Typography>
              </Box>
            </Grid>

            {/* Column 3 */}
            <Grid xs={12} md={4}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography level='h3' fontWeight='lg'>
                  Impact
                </Typography>
                <Typography level='body-md'>
                  Creating meaningful change through research and discovery
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

// Initialize the app
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

export default App;
