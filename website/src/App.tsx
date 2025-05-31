import React from 'react';
import Typography from '@mui/joy/Typography';
import { createRoot } from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { extendTheme, ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#fff',
          500: '#fff', // This is used as the main color
        },
        neutral: {
          50: '#000',
          500: '#000', // This is used as the main color
        },
        background: {
          body: '#f5f5f5',
          surface: '#ffffff',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#000',
          500: '#000', // This is used as the main color
        },
        neutral: {
          50: '#fff',
          500: '#fff', // This is used as the main color
        },
        text: {
          primary: '#fff',
          secondary: '#cccccc',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <h1 id='header'>
          <Typography
            component='h1'
            level='h1'
            sx={{
              fontWeight: 'xl',
              fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Welcome to SAPID Research
          </Typography>
        </h1>
      </header>
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
